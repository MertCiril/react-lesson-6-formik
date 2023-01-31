import { Formik, Field, Form } from "formik";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Formik Form</h1>
      <Formik
        //eşleştirmek için field'ın name'ine aşağıdaki değerler yazılır
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          gender:"",
        }}
        onSubmit={async (values) => {
          //inputlara girilen değerleri gösteriyor
          console.log(values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" placeholder="Jane" />

          <br />
          <br />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" placeholder="Doe" />

          <br />
          <br />

          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="jane@acme.com" type="email" />
          <br />
          <br />

          <label>Male</label>
          <Field name="gender" type="radio" />
          <label>Female</label>
          <Field name="gender" type="radio" values="gender"/>
          <br />
          <br />

          <button type="submit">Submit</button>

        </Form>

      </Formik>
    </div>
  );
}

export default App;
