
const Register = () => {
    return ( 
        <div className="form-container">

            <div className="SR-box">
            <img className='check-register-icon' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgdHJhbnNmb3JtPSJzY2FsZSgzLjU4MzMzLDMuNTgzMzMpIiByPSIyMCIgZmlsbD0iI2E4OGM2YSI+PC9jaXJjbGU+PHBhdGggZD0iTTE0MC4wNzYwOCw2Mi43NjIwOGwtMTQuNjA1NjcsLTE0LjAxNDQybC00My44Niw0NS4yNTM5MmwtMjEuODQ0LC0yMC43ODMzM2wtMTQuMDE0NDIsMTQuNjA1NjdsMjEuNzY4NzUsMjAuNzExNjd2MGwxNC42MDkyNSwxMy45MzkxN2wwLjAyMTUsLTAuMDIxNWwwLjAyMTUsMC4wMjE1bDE0LjA3NTMzLC0xNC41NDgzM3YweiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04Mi4xNTE1LDEyMi40NTMyNWwxNC4wOTY4MywtMTQuNTI2ODNsLTE0LjYzNzkyLC0xMy45MjQ4M2wtMTQuMDg5NjcsMTQuNTM0eiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>                 

                 <div className="box-left">
                    <img src="https://img.icons8.com/material/24/000000/add-user-male--v1.png"/>
                    <p className="box-title">Register</p>
                    <p className="box-msg">Browse and find what you need</p>

                 </div>

                 <div className="box-right">
                     <img src="https://img.icons8.com/material/24/000000/enter-2--v2.png"/>
                     <p className="box-title">Sign in</p>
                     <p className="box-msg">Already have an account then welcome back</p>
                 </div>

            </div>

            <form action="/register" method="post" name="form1">

                <div className="name">
                  <input type="name" name="name" className="firstName" id="name" placeholder="First Name*" />
                  <input type="name" name="name" className="lastName" id="name" placeholder="Last Name*" />
                </div> 

                <div className="form-group">
                  <input type="email" name="email" className="mail" id="email"  placeholder="Email*" />
                </div>

                <div className="form-group">
                  <input type="password" name="password" className="psw1" id="password"  placeholder="Password*" />
                </div>

                <div className="form-group">
                  <input type="password" name="password" className="psw2" id="password"  placeholder="Repeat Password*" />
                </div>


           </form> 
           <button className="submit">Submit</button>

    </div>
     );
}
 
export default Register;