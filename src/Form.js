import React, { useEffect, useState } from "react";
import "./style.css";
import { Table } from "./Table";

export const Form = () => {
  const [skils, setSkills] = useState([]);
  const [globalData, setGlobalData] = useState([]);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNo: "",
    email: "",
    desc: "",
    totalExp: "",
  });
  const [allData, setAllData] = useState([]);
  const [edit, setEdit] = useState(false);

  // const [email, setEmail] = useState("")
  const handleCancel = () => {
    setEdit(false)
    setData({
        firstName: "",
        lastName: "",
        userName: "",
        phoneNo: "",
        email: "",
        desc: "",
        totalExp: "",
      })
      setSkills([])

  }

  const setEditState = (ele) => {
    console.log(ele,'sssk',globalData)
    const {skils,...rest} = ele;
    setData(rest)
    setSkills(skils)
    setEdit(true)

  }

  const handlecollectskills = (e) => {
    let tempskills = [...skils];
    if (tempskills.includes(e.target.name)) {
      let index = tempskills.indexOf(e.target.name);
      tempskills.splice(index, 1);
    } else {
      tempskills.push(e.target.name);
    }
    setSkills(tempskills);
    console.log(skils);
    console.log(e.target.checked, e.target.name);
  };

  const dataHandler = (e) => {
    let { name, value } = e.target;
    setData((state) => ({
      ...state,
      [name]: value,
    }));
  };
  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

  const submitdata = (e) => {
    e.preventDefault();
    let mydata = { ...data, skils };
    
    if (
      containsUppercase(mydata.userName) ||
      mydata.userName.split(" ").length > 1 ||
      mydata.userName.length < 1
    ) {
      alert("provide valid username");
      return;
    }
    if (!(mydata.phoneNo.length <= 10)) {
      alert("invalid phone number");
      return;
    }
    if (!/@gmail\.com$/.test(mydata.email)) {
      alert("invalid  email address ");
      return;
    }
    console.log(mydata);
    if (mydata.skils.length <= 1) {
      alert("atleast select two skills");
      return;
    }
    if (mydata.totalExp.length <= 0) {
        alert("please enter your total experience");
        return;
      }
    if(!edit){
        let tempData = [...globalData];
        let isCorrect = tempData.find((ele)=>{
            if(ele.phoneNo===mydata.phoneNo || ele.userName===mydata.userName){
                return true
            }
            return false
        })
        if(isCorrect){
            alert("phoneno/userName number aleardy present")
            return
        }

    }
    if (edit) {
      let tempData = [...globalData];
      let temp = tempData.map((ele) => {
        if (ele.phoneNo === mydata.phoneNo) {
          return mydata;
        }
        return ele;
      });
      setGlobalData(temp)
      setEdit(false)
      setData({  firstName: "",
    lastName: "",
    userName: "",
    phoneNo: "",
    email: "",
    desc: "",
    totalExp: "",})
    setSkills([])
      return
    }
    setGlobalData((state) => [...state, mydata]);
    setData({  firstName: "",
    lastName: "",
    userName: "",
    phoneNo: "",
    email: "",
    desc: "",
    totalExp: "",})
    setSkills([])
  };

  useEffect(() => {
    console.log(globalData);
  }, [globalData]);
  console.log(allData);

  const deleteData = (phoneNumber) => {
    console.log(phoneNumber,"pjo")
    let tempData = [...globalData];
   let filterData =  tempData.filter((ele)=>{
        if(ele.phoneNo!==phoneNumber){
            return ele
        }
    })
    console.log(filterData,"fvdvf")
    setGlobalData(filterData)
  }


  return (
    <div className="d-flex align-items justify-content-center">
      <div style={{ width: "50%", padding: "20px" }}>
        {/* fomm data */}
        <h1>Form</h1>

        <div className="d-flex align-items-center ">
          <div class="form-group col-4">
            <label for="exampleInputEmail1">First Name</label>
            <input
              type="email"
              class="form-control"
              name="firstName"
              value={data.firstName}
              onChange={dataHandler}
              placeholder="Enter first Name"
            />
          </div>
          <div class="form-group col-4" style={{ marginLeft: "10px" }}>
            <label for="exampleInputEmail1">Last Name</label>
            <input
              type="email"
              class="form-control"
              name="lastName"
              value={data.lastName}
              onChange={dataHandler}
              placeholder="Enter Last Name"
            />
          </div>
        </div>

        <div class="form-group col-5">
          <label for="exampleInputEmail1">User Name</label>
          <input
          disabled={edit}
            type="email"
            class="form-control"
            name="userName"
            value={data.userName}
            onChange={dataHandler}
            placeholder="Enter user_name"
          />
        </div>

        <div class="form-group col-5">
          <label for="exampleInputEmail1">Phone Number</label>
          <input
          disabled={edit}
            type="number"
            class="form-control"
            name="phoneNo"
            value={data.phoneNo}
            onChange={dataHandler}
            placeholder="Enter Phone number"
          />
        </div>

        <div class="form-group col-5">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className={`form-control form   `}
            id="validationServer02"
            name="email"
            value={data.email}
            onChange={dataHandler}
          />
          <div className="invalid-feedback">please enter correct</div>
        </div>

        <div class="form-group col-5">
          <label for="exampleInputEmail1">Skills</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="html"
              name="html"
              checked={skils.includes("html")}
              onChange={handlecollectskills}
            />
            <label class="form-check-label" for="html">
              HTML
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="css"
              name="css"
              checked={skils.includes("css")}
              onChange={handlecollectskills}
            />
            <label class="form-check-label" for="css">
              CSS
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="react"
              name="react"
              checked={skils.includes("react")}
              onChange={handlecollectskills}
            />
            <label class="form-check-label" for="react">
              React
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="typescript"
              name="typescript"
              checked={skils.includes("typescript")}
              onChange={handlecollectskills}
            />
            <label class="form-check-label" for="typescript">
              TypeScript
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="CSS3"
              name="css3"
              checked={skils.includes("css3")}
              onChange={handlecollectskills}
            />
            <label class="form-check-label" for="CSS3">
              CSS3
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="JavaScript"
              name="javascript"
              checked={skils.includes("javascript")}
              onChange={handlecollectskills}
            />
            <label class="form-check-label" for="JavaScript">
              JavaScript
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              name="jquery"
              checked={skils.includes("jquery")}
              onChange={handlecollectskills}
            />
            <label class="form-check-label" for="flexCheckChecked">
              jQuery
            </label>
          </div>
        </div>

        <div class="form-group col-5">
          <label for="exampleInputEmail1">Total experience</label>
          <input

            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter experience"
            name="totalExp"
            type="number"
            value={data.totalExp}
            onChange={dataHandler}
          />
        </div>

        <div class="form-group col-5">
          <label for="exampleInputEmail1">Description</label>
          <textarea
            type="email"
            class="form-control"
            name="desc"
            value={data.desc}
            onChange={dataHandler}
            placeholder="Enter Description"
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={submitdata}>
           {edit ? "update" : "submit"}
        </button>
      {edit &&  <button class="btn btn-danger"  onClick={handleCancel} >Cancel</button>}
      </div>

      {/* table data */}

      <div style={{ width: "50%", padding: "20px" }}>
        <h1>Table Data</h1>
        <Table globalData={globalData} setEditState={setEditState} deleteData={deleteData} />
      </div>
    </div>
  );
};
