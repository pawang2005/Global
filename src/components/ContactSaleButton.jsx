import Form from "./Form"
import {useState} from 'react'
const ContactSaleButton = () => {

  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    console.log("Toggling Form:", !isFormVisible); // Debugging
    setIsFormVisible(!isFormVisible);
  };
  return (
    <>
      
            <button className="contact-sales" onClick={toggleFormVisibility} style={{cursor:"pointer"}}>
              Contact Sales →
            </button>
        

          {<>
            <Form
              isFormVisible={isFormVisible}
              onClose={() => setIsFormVisible(false)}
            />
            </>
          }
    </>
  )
}

export default ContactSaleButton;