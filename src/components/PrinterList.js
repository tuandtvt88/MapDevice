import React from 'react';
import './PrinterList.css';

const PrinterList = () => {
  const printers = {
    university: [
      { name: "MF 244DW", department: "HÀNH CHÁNH", ip: "172.16.0.90", mac: "EC:2E:98:A7:FC:42" },
      { name: "MF 244DW", department: "TUYỂN SINH T5", ip: "172.16.0.69", mac: "20:4E:F6:0A:53:75" },
      { name: "MF 244DW", department: "TUYỂN SINH T1", ip: "172.16.0.98", mac: "20:4E:F6:5F:9C:2D" },
      { name: "MF 244DW", department: "ĐÀO TẠO", ip: "172.16.0.54", mac: "20:4E:F6:0A:35:B7" },
      { name: "MÁY IN MÀU", department: "CTSV", ip: "172.16.0.55", mac: "DC:CD:2F:33:6F:81" },
      { name: "Canon8c8a69", department: "VĂN PHÒNG FE", ip: "172.16.0.9", mac: "C4:AE:59:9E:12:2F" },
      { name: "HP LaserJet Pro M404DW", department: "CTSV", ip: "172.16.0.154", mac: "C8:5A:CF:D0:B6:51" }
    ],
    highSchool: [
      { name: "MÁY PHOTO TOSHIBA 357", department: "SCHOOL QUY NHƠN", ip: "172.16.0.43", mac: "00:80:91:76:D7:98" },
      { name: "MF 244DW", department: "SCHOOL QUY NHƠN", ip: "172.16.0.26", mac: "F0:003:8C:95:1D:C4" },
      { name: "MF 244DW", department: "GV FSC", ip: "172.16.0.88", mac: "20:4E:F6:0A:35:BD" }
    ]
  };

  return (
    <div className="printer-list-container">
      
      <div className="printer-sections-wrapper">
        <div className="printer-section">
          <h2 className="section-title">Đại Học</h2>
          <div className="printer-table-container">
            <table className="printer-table">
              <thead>
                <tr>
                  <th>TÊN THIẾT BỊ</th>
                  <th>PHÒNG/BAN</th>
                  <th>IP</th>
                  <th>ĐỊA CHỈ MAC</th>
                </tr>
              </thead>
              <tbody>
                {printers.university.map((printer, index) => (
                  <tr key={`uni-${index}`}>
                    <td>{printer.name}</td>
                    <td>{printer.department}</td>
                    <td>{printer.ip}</td>
                    <td>{printer.mac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="printer-section">
          <h2 className="section-title">Phổ Thông</h2>
          <div className="printer-table-container">
            <table className="printer-table">
              <thead>
                <tr>
                  <th>TÊN THIẾT BỊ</th>
                  <th>PHÒNG/BAN</th>
                  <th>IP</th>
                  <th>ĐỊA CHỈ MAC</th>
                </tr>
              </thead>
              <tbody>
                {printers.highSchool.map((printer, index) => (
                  <tr key={`hs-${index}`}>
                    <td>{printer.name}</td>
                    <td>{printer.department}</td>
                    <td>{printer.ip}</td>
                    <td>{printer.mac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinterList;