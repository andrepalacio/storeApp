//create a function to change administrator data, on change

import React, {useState} from 'react';

function AdministratorForm(admin) {

  const [formData, setFormData] = useState(admin.admin[0]);
  // const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      console.log(formData)
      try {
        const response = await fetch('http://localhost:9000/administrator', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  const handleInputChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // const toggleShowPassword = () => {
  //   setShowPassword((prevState) => !prevState);
  // };

  return (
    <div className='adminData'>
      <form onSubmit={handleSubmit} className="container-inp">
        <div>
          <label htmlFor='name'>Nombre:</label>
          <input type='text' name='name' id='name' disabled value={formData.name} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' id='email' value={formData.email} onChange={handleInputChange}/>
        </div>
        <div>
          <label htmlFor='password'>Contraseña:</label>
          <input type='text' name='password' id='password' value={formData.password} onChange={handleInputChange} />
        </div>
        {/* <div>
          <input type='checkbox' id='showPassword' checked={showPassword} onChange={toggleShowPassword} />
          <label htmlFor='showPassword'>Mostrar contraseña</label>
        </div> */}
        <div>
          <label htmlFor='phone'>Teléfono:</label>
          <input type='tel' name='phone' id='phone' value={formData.phone} onChange={handleInputChange}/>
        </div>
        <div>
          <label htmlFor='address'>Dirección:</label>
          <input type='text' name='address' id='address' value={formData.address} onChange={handleInputChange}/>
        </div>

        <div className="container-submit"> 
          <button className="btn-submit" type='submit'>Editar</button>
        </div>
      </form>
    </div>
  )
}

export default AdministratorForm;
        