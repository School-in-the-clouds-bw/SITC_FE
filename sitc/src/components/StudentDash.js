import React, { useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

const TutorProfile = styled.div`
  margin: 1%;
  box-shadow: 0 5px 10px rgba(104, 113, 88, 0.12),
    0 5px 2px rgba(104, 113, 88, 0.24);
  border-radius: 8px;
  width: 50%;
  background-color: #9fe2bf;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tutors = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SearchForms = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StudentDash = () => {
    const [tutors, setTutors] = React.useState();
    const [results, setResults] = React.useState([]);
    const [query1, setQuery1] = React.useState("");
    const [query2, setQuery2] = React.useState("");


//     useEffect(()=>{axios.get("https://school-in-the-cloud-be.herokuapp.com/api/student/volunteers")
//     .then(res=>(console.log(res)))
// .catch(err=>(console.log(err)))}, []);

    
    useEffect(()=>{axios.get("https://school-in-the-cloud-be.herokuapp.com/api/student/volunteers")
        .then(res=>{
            const result = res.data.filter(tutor => tutor.country.toLowerCase().includes(query1.toLowerCase()));
            setResults(result);
        })
        .catch (err=>{console.log(err)})
    }, [query1]);

    useEffect(()=>{axios.get("https://school-in-the-cloud-be.herokuapp.com/api/student/volunteers")
        .then(res=>{
            const result = res.data.filter(tutor => tutor.daysAvailable.includes(query2));
            setResults(result);
        })
        .catch (err=>{console.log(err)})
    }, [query2]);

    const searchHandler1 = (e) => {
        setQuery1(e.target.value);
    }
    const searchHandler2 = (e) => {
        setQuery2(e.target.value);
    }


    return (
        <div>
        <h2>Welcome, Student</h2>
        <SearchForms>
        <label htmlFor="search"><input type="text" value={query1} placeholder="Search for Tutor by Country" onChange={searchHandler1}></input></label>
        <label htmlFor="search"><input type="text" value={query2} placeholder="Search for Tutor by Days" onChange={searchHandler2}></input></label>
        </SearchForms>
        <Tutors>
            <h2>Available Tutors</h2>
            {results.map(tutor1=>{return (<TutorProfile>
                <p>Name of Tutor: {tutor1.name}</p>
                <p>Country: {tutor1.country.charAt(0).toUpperCase() + tutor1.country.slice(1)}</p>
                <p>Day(s) Available: {tutor1.daysAvailable}</p>
                <p>Times Available: {tutor1.timeAvailable}</p>
                </TutorProfile>
                )})}

        </Tutors>
        </div>
    )
}

// const Tutor = (props) => {
//     console.log(props)
//     return (
//         <Link to={`/tutor/${props.results.id}`}>
//         <div>
//         {props.results.map(tutor1=>{return (<div>
//                 <p>Name of Tutor: {tutor1.name}</p>
//                 <p>Country: {tutor1.country}</p>
//                 <p>Day(s) Available: {tutor1.daysAvailable}</p>
//                 </div>)})}
//         </div>
//      </Link>
//     )
// }

export default StudentDash