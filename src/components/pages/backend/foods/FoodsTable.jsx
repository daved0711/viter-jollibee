import React from 'react'
import IconServerError from '../partials/IconServerError'
import TableLoader from '../partials/TableLoader'
import LoadMore from '../partials/LoadMore'
import Pills from '../partials/Pills'
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from 'lucide-react'
import IconNoData from '../partials/IconNoData'
import SpinnerTable from '../partials/spinners/SpinnerTable'
import { StoreContext } from '@/components/Store/storeContext'
import { setIsAdd, setIsArchive, setIsConfirm, setIsDelete, setIsRestore } from '@/components/Store/storeAction'
import ModalDelete from '../partials/modals/ModalDelete'
import ModalConfirm from '../partials/modals/ModalConfirm'
import { menus } from '../menu-data'
import useQueryData from '@/components/custom-hook/useQueryData'
import Status from '@/components/partials/Status'
import ModalArchive from '@/components/partials/modal/ModalArchive'
import ModalRestore from '@/components/partials/modal/ModalRestore'



const FoodsTable = ({setItemEdit}) => {
     const { dispatch, store} = React.useContext(StoreContext);
     const [id, setIsId] = React.useState("");
    
   let counter = 1;

   const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  }
    const handleDelete = (item) => {
      dispatch(setIsDelete(true));
      setIsId(item.food_aid);
    }
    const handleArchive = (item) => {
      dispatch(setIsArchive(true));
      setIsId(item.food_aid);
    }
    
    const handleRestore = (item) => {
      dispatch(setIsRestore(true));
      setIsId(item.food_aid);
    }

    const{
      isFetching,
      error,
      data:result,
      status,
    } = useQueryData(
      `/v2/food`, //endpoint
      "get", //method
      "food"// key
    
    );

  return (
    <>
    <div className='mt-10 bg-secondary rounded-md p-4 border border-line relative ' >
                        {/* <SpinnerTable/> */}
                    <div className='table-wrapper custom-scroll'>
                   
                   {/* <TableLoader count={7} cols={2}/> */}
                   
                    <table>
                    <thead>
                        <tr>
                        <th> # </th>
                        <th> Status </th>
                        <th> Title </th>
                        <th> Price </th>
                        <th> Category </th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td colSpan={100}>
                               <IconNoData/>
                            </td>    
                        </tr>
                        <tr>
                            
                             <td colSpan={100}>
                               <IconServerError/>
                            </td>
                            
                        </tr> */}
                  {result?.count > 0 &&
              result.data.map((item, key) => (
                    <tr  key={key}>
                            <td>{counter++}.</td>
                            <td>
                    {item.food_is_active === 1 ? (
                      <Status text="Active" />
                    ) : (
                      <Status text="Inactive" />
                    )}
                    </td>
                            {/* <td title={`${item.food_image}`}>{item.food_image}</td> */}
                            <td title={`${item.food_title}`}>{item.food_title}</td>
                            <td title={`${item.food_price}`}>{item.food_price}</td>
                            <td title={`${item.category_title}`}>{item.category_title}</td>
                            {/* <td title={`${item.category_title}`}>{item.category_title}</td> */}
                            <td>
                                <ul className='table-action  '>
                                    {item.food_is_active ? (
                                 <>
                                    <li><button className='tooltip' type='button' data-tooltip="Edit" onClick={() => handleEdit(item)}><FilePenLine/></button></li>
                                    <li><button className='tooltip' 
                                    type='button' data-tooltip="Archive" onClick={() => handleArchive(item)}><Archive /></button></li>
                                </>) :(<>
                                    <li><button className='tooltip'
                                    type='button' data-tooltip="Restore" onClick={()=>handleRestore(item)}><ArchiveRestore /></button></li>
                                    <li><button className='tooltip' data-tooltip="Delete" onClick={()=>handleDelete(item)}><Trash2 /></button></li>
                                </>)}
                               
                                    
                                </ul>
                            </td>
                        </tr>
                          ))}
                        
                        

                           
                    
                       
                    </tbody>    
                    </table>    

                    <LoadMore/>
                    </div>
                    </div> 
                  
                    {store.isDelete && <ModalDelete setIsDelete={setIsDelete} mysqlApiDelete={`/v2/food/${id}`}queryKey="food"/>}

                    {store.isRestore && <ModalRestore setIsRestore={setIsRestore} mysqlEndpoint={`/v2/food/active/${id}`}queryKey="food"/>}

                    {store.isArchive && <ModalArchive setIsArchive={setIsArchive} mysqlEndpoint={`/v2/food/active/${id}`} queryKey="food"/>}
                
                    
                     </>
  )
}

export default FoodsTable
