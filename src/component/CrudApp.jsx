import { useState } from "react";

const CrudApp=()=>{
    const [user,setuser] = useState('Nilesh')


    const addNew=()=>{
        alert('Add Data Succesfully')
        setuser('')
    }
    return (
        <div>
            <h2>CRUD App</h2>
            <div className="bg-success w-50 m-auto p-3 rounded">
                <h2>Add User</h2>
            <div>
                <input type="text" className="form-control mb-3" placeholder="Enter Name"  />
               
                               </div>

                <div>
                <input type="text" className="form-control mb-3" placeholder="Enter Email" />
               
                </div>

                <div>
                <input type="text" className="form-control mb-3  " placeholder="Enter Contact" />
               
                </div>

                <div>
                <input type="text" className="form-control mb-3" placeholder="Enter Address" />
                
                </div>
                
                <div>
                <input type="text" className="form-control mb-3" placeholder="Enter City" />
                
                </div>

                <button className="btn btn-danger" onClick={addNew}>Submit Data</button>

               

            </div>
           
             <div>
                <table className="table table-dark mt-3">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>101</td>
                            <td>Akash Kutal</td>
                            <td>ak138@gmail.com</td>
                            <td>8010424725</td>
                            <td>old sangvi</td>
                            <td>pune</td>
                            <td>
                                <button className="btn btn-success p-1 m-1">Edit </button>
                                <button className="btn btn-danger p-1 m-1">Delete</button>
                                <button className="btn btn-primary p-1 m-1">VIew User</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
             </div>

        </div>
    )
}

export default CrudApp;