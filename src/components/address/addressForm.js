import React from 'react'
import styles from './Address.module.css'
import { useGlobal } from '../../contexts/globalContext'
import Closesvg from '../../assest/images/svgs/delete.svg'
import useAddressForm from '../../hooks/useforms/useAddressform'

function AddressFormModal() {
  const { openmodal, setOpenModal,allAddress,setAllAddress } = useGlobal()

  const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }
  const { values,
    errors,
    handleChange,
    asFillDummy,onCancel } = useAddressForm(formLogin)

    const handleSubmit = async(event) => {
      if (event) event.preventDefault();
      if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
        await setAllAddress([...allAddress,values]);
        onCancel(event);
        setOpenModal(false)
      } else {
         console.error("error",errors)
      }
  }


  return (
    <>
      {openmodal && (
        <div className={styles.heroform}>
          <div className={styles.herosection}>
            <p className={styles.title}>
              Add Adresss
            </p>
            <img onClick={() => setOpenModal(false)} className={styles.closeicon} src={Closesvg} alt='close' />
          </div>

          <div className={styles.formsection}>
            <form onSubmit={handleSubmit} className={styles.formcontainer}>

              <select value={values?.country} onChange={(e)=>handleChange(e)} name="country" id="country">
                <option value="india">india</option>
                <option value="pakisthan">pakisthan</option>
                <option value="yaman">yaman</option>
                <option value="dubai">dubai</option>
              </select>

              <input value={values?.username}  onChange={(e)=>handleChange(e)} name='username' className={styles.adrsinputs} />
              <input value={values?.mobile}  onChange={(e)=>handleChange(e)} name='mobile' className={styles.adrsinputs} />
              <input value={values?.pincode}  onChange={(e)=>handleChange(e)} name='pincode' className={styles.adrsinputs} />
              <input value={values?.housedetails}  onChange={(e)=>handleChange(e)} name='housedetails' className={styles.adrsinputs} />
              <input value={values?.area}  onChange={(e)=>handleChange(e)} name='area' className={styles.adrsinputs} />
              <input value={values?.cityAndstate} onChange={(e)=>handleChange(e)} name='cityAndstate' className={styles.adrsinputs} />

              <div className={styles.modalFooter}>
                <button onClick={(e)=>asFillDummy(e)} className={styles.dummy}>
                  fill with dummy
                </button>
                <span className={styles.actions}>
                  <button onClick={(e)=>onCancel(e)} className={styles.cancel}>cancel</button>
                  <button className={styles.save}>save</button>
                </span>
              </div>
            </form>

          </div>
        </div>
      )}
    </>

  )
}

export default AddressFormModal
