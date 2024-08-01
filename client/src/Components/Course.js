import React from 'react'

const Course = () => {
  return (
    <div>
      <h3><strong>Course Details</strong></h3>
        <table border="1px" width="80%" align="center">
        <thead>
            <tr>
                <th>Course Code</th>
                <th>Name</th>
                <th>LTPS</th>
                <th>Credits</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>23UC2202</td>
                <td>Linear Algebra</td>
                <td>3-0-2-3</td>
                <td>4</td>
            </tr>
            <tr>
                <td>23UC1203</td>
                <td>MSWB</td>
                <td>0-0-2-3</td>
                <td>6</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Course