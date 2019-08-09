import React from 'react';

const index = props => {
  console.log(props);
  return (
    <div>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col' class='text-warning'>
              #
            </th>
            <th scope='col' class='text-primary'>
              Name
            </th>
            <th scope='col' class='text-warning'>
              Email
            </th>
            <th scope='col' class='text-info'>
              Portfolio
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Adam Hydorn</td>
            <td>hydorn.adam@gmail.com</td>
            <td>
              <a
                href=' https://ahydorn.github.io/responsive-portfolio/index.html'
                target='_blank'
                rel='noopener noreferrer'
              >
                ahydorn.github.io/responsive-portfolio/
              </a>
            </td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Badri Vasistha</td>
            <td>badri.vasistha@gmail.com</td>
            <td>
              <a
                href='https://badvasistha.github.io/Portfolio/'
                target='_blank'
                rel='noopener noreferrer'
              >
                badvasistha.github.io/Portfolio/
              </a>
            </td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Clifford Jorgensen</td>
            <td>cliffordjorgensen@gmail.com</td>
            <td>
              <a
                href='https://github.com/cliffordjorgensen'
                target='_blank'
                rel='noopener noreferrer'
              >
                github.com/cliffordjorgensen
              </a>
            </td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Deepesh Nagarkoti</td>
            <td>deepesh.nagarkoti@gmail.com</td>
            <td>
              <a
                href='https://depeace.github.io/basic-portfolio/'
                target='_blank'
                rel='noopener noreferrer'
              >
                depeace.github.io/basic-portfolio/
              </a>
            </td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Michael Jiang</td>
            <td>mjlikre@gmail.com</td>
            <td>
              <a
                href='https://github.com/mjlikre'
                target='_blank'
                rel='noopener noreferrer'
              >
                github.com/mjlikre
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default index;
