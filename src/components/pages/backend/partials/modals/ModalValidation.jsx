import { Archive, Info, Trash2, X } from 'lucide-react'
import React from 'react'
import ModalWrapper from './Modalwrapper'
import { setValidate } from '@/components/Store/storeAction';
import { StoreContext } from '@/components/Store/storeContext';

const ModalValidation = () => {
    const { dispatch} = React.useContext(StoreContext);

    const handleClose = () => {dispatch(setValidate(false));
    };

return (
    <>
     <ModalWrapper>
        <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2
        -translate-y-1/2 max-w-[300px] w-full rounded-md border border-line">
           
            <div className='modal-body p-2 py-4 text-center'>

                <Info className='text-info mx-auto mb-4' size={35}/>
                <h5>Validation Issue</h5>
                <p className='my-5 text-center'> 
                   The title already exist
                </p>
                <button className='btn btn-info w-full flex justify-center' onClick={handleClose}>okay</button>
                
            </div>
        </div>
    </ModalWrapper>
      
    </>
  )
}

export default ModalValidation