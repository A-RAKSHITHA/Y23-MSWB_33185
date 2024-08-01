import React from 'react'

const Faculty = () => {
  return (
    <div>
        <h3><strong>Faculty Details</strong></h3>
        <table border="1px" width="80%" align="center">
        <thead>
            <tr>
                <th>Faculty ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1034</td>
                <td>Dr V. Murali Mohan</td>
                <td>Professor</td>
                <td>CSE</td>
            </tr>
            <tr>
                <td>1038</td>
                <td>Dr Agilesh</td>
                <td>Professor</td>
                <td>ECE</td>
            </tr>
            <tr>
                <td>1043</td>
                <td>Dr T. Nageshwar Rao</td>
                <td>Professor</td>
                <td>CSA</td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Faculty