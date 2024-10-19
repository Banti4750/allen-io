import React from 'react';

const NeetTable = () => {
  return (
    <>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        //   textAlign: 'center',
        }}
      >
        <table
          style={{
            width: '1020px',
            height: '230px',
            backgroundColor: '#122034',
            borderRadius: '10px',
            color: 'white',
            fontSize: '18px',
            borderCollapse: 'collapse',
            textAlign:'left',
            tableLayout: 'auto', 
           
          }}
        >
          <thead >
            <tr >
              <th style={{ borderBottom: '1px solid #8D8D8C',  borderRight:'1px solid #8D8D8C' , padding: '20px' ,  }}>NEET-UG Online Program</th>
              <th style={{ borderBottom: '1px solid #8D8D8C',  borderRight:'1px solid #8D8D8C' ,padding: '20px' }}>Class</th>
              <th style={{ borderBottom: '1px solid #8D8D8C', padding: '20px' }}>Language</th>
            </tr>
          </thead>
          <tbody >
            <tr >
              <td style={{ borderBottom: '1px solid #8D8D8C', textAlign: 'left', borderRight:'1px solid #8D8D8C' , padding: '20px', color:'blue' , textDecoration: 'underline',textDecorationColor: 'blue',}}>NEET Online Coaching Class 11</td>
              <td style={{ borderBottom: '1px solid #8D8D8C', textAlign: 'left', borderRight:'1px solid #8D8D8C' , padding: '20px' }}>Class 11</td>
              <td style={{ borderBottom: '1px solid #8D8D8C', textAlign: 'left', padding: '20px' }}>Hindi, English</td>
            </tr>
            <tr>
            <td style={{ borderBottom: '1px solid #8D8D8C', textAlign: 'left', borderRight:'1px solid #8D8D8C' , padding: '20px'  , color:'blue' , textDecoration: 'underline',textDecorationColor: 'blue',}}>NEET Online Coaching Class 12</td>
              <td style={{ borderBottom: '1px solid #8D8D8C', textAlign: 'left', borderRight:'1px solid #8D8D8C' , padding: '20px' }}>Class 12</td>
              <td style={{ borderBottom: '1px solid #8D8D8C', textAlign: 'left', padding: '20px' }}>Hindi, English</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left',borderRight:'1px solid #8D8D8C' , padding: '20px' , color:'blue', textDecoration: 'underline',textDecorationColor: 'blue', }}>NEET Online Coaching Droppers</td>
              <td style={{ textAlign: 'left',borderRight:'1px solid #8D8D8C' , padding: '20px' }}>Class 12 Plus</td>
              <td style={{ textAlign: 'left', padding: '20px' }}>Hindi, English</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NeetTable;
