import React from 'react'

const Student = () => {
  return (
    <div>
        <h3>Student Details</h3>
        <table border="1px" width="80%" align="center">
        <thead>
            <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2300033185</td>
                <td>A. Rakshitha</td>
                <td>CSE</td>
                <td>2nd</td>
            </tr>
            <tr>
                <td>2300032536</td>
                <td>T. Monika</td>
                <td>CSE</td>
                <td>2nd</td>
            </tr>
            <tr>
                <td>2300030036</td>
                <td>A. Sai Varshitha</td>
                <td>CSE</td>
                <td>2nd</td>
            </tr>
            <tr>
                <td>2300090015</td>
                <td>G. Prabhas Ram</td>
                <td>CS&IT</td>
                <td>2nd</td>
            </tr>
            <tr>
                <td>2300031098</td>
                <td>M. Likitha</td>
                <td>CSE</td>
                <td>2nd</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Student