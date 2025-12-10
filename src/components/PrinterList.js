import React, { useState, useEffect } from 'react';
import './PrinterList.css'; 

// Dữ liệu máy in cục bộ
const printersData = [
  // Đại Học
  { id: 1, name: "CANON MF 244DW", department: "HÀNH CHÁNH", ip: "172.16.0.90", mac: "EC:2E:98:A7:FC:42", type: 'university' },
  { id: 2, name: "CANON MF 244DW", department: "TUYỂN SINH T5", ip: "172.16.0.69", mac: "20:4E:F6:0A:53:75", type: 'university' },
  { id: 3, name: "CANON MF 244DW", department: "TUYỂN SINH T1", ip: "172.16.0.98", mac: "20:4E:F6:5F:9C:2D", type: 'university' },
  { id: 4, name: "CANON MF 244DW", department: "ĐÀO TẠO", ip: "172.16.0.54", mac: "20:4E:F6:0A:35:B7", type: 'university' },
  { id: 5, name: "IN MÀU EPSON L805", department: "CTSV", ip: "172.16.0.55", mac: "DC:CD:2F:33:6F:81", type: 'university' },
  { id: 6, name: "CANON MF264DW", department: "VĂN PHÒNG FE", ip: "172.16.0.9", mac: "C4:AE:59:9E:12:2F", type: 'university' },
  { id: 7, name: "HP LaserJet Pro M404DW", department: "CTSV", ip: "172.16.0.154", mac: "C8:5A:CF:D0:B6:51", type: 'university' },
  // Phổ Thông
  { id: 8, name: "PHOTO TOSHIBA 357", department: "VĂN PHÒNG FSC", ip: "172.16.0.43", mac: "00:80:91:76:D7:9B", type: 'high_school' },
  { id: 9, name: "CANON MF 244DW", department: "VĂN PHÒNG FSC", ip: "172.16.0.26", mac: "F0:03:8C:95:1D:C4", type: 'high_school' },
  { id: 10, name: "CANON MF 244DW", department: "TUYỂN SINH FSC", ip: "172.16.0.88", mac: "20:4E:F6:0A:35:BD", type: 'high_school' },
];

const PrinterList = () => {
  const [groupedPrinters, setGroupedPrinters] = useState({
    "Đại Học": [],
    "Phổ Thông": []
  });
  const [loading, setLoading] = useState(true);

  // Driver URLs cho tất cả máy in
  const driverUrls = {
    "CANON MF 244DW": "https://drive.google.com/file/d/1wDygt1LkR5FepnLLLSDV-zSsdN4ZaWOM/view?usp=sharing",
    "HP LaserJet Pro M404DW": "https://drive.google.com/file/d/1y92MpT2hjGrwqLLMy-1t11jrLR4LYZEr/view?usp=sharing",
    "IN MÀU EPSON L805": "https://drive.google.com/file/d/1CaW1MiXiSfkSKtHYcqeXpndAVSr7p99Z/view?usp=sharing",
    "CANON MF264DW": "https://drive.google.com/file/d/1GAAeCK2YA8guTZ0JVNONgylBsXbBI26J/view?usp=sharing",
    "PHOTO TOSHIBA 357": "https://drive.google.com/file/d/1hkJsW-5hMnWTUoosetuKpJwb9xySofyl/view?usp=sharing"
  };

  // Manual URLs cho tất cả máy in
  const manualUrls = {
    "CANON MF 244DW": "https://drive.google.com/drive/folders/1caE1WmnqpCRju02fnTc9kRlwRmDYJpg7?usp=drive_link",
    "HP LaserJet Pro M404DW": "https://drive.google.com/file/d/101HzBNAc6aIopsOlHTsMZImcfOFpjLE3/view?usp=sharing",
    "IN MÀU EPSON L805": "https://drive.google.com/drive/folders/112fQvlSsEL1LKIE7-o5WbqHqdsSdXNTS?usp=sharing",
    "CANON MF264DW": "https://www.youtube.com/watch?v=ve9eChF3ako",
    "PHOTO TOSHIBA 357": "https://drive.google.com/drive/folders/1caE1WmnqpCRju02fnTc9kRlwRmDYJpg7?usp=drive_link"
  };

  // WiFi connections cho tất cả phòng ban
  const wifiConnections = {
    "HÀNH CHÁNH": "AP-BT-FU-U6P",
    "TUYỂN SINH T5": "AP-BT-TuyenSinh-U6P",
    "TUYỂN SINH T1": "AP-BT-TuyenSinh-U6P",
    "ĐÀO TẠO": "AP-Tang-4-401-U6",
      "CTSV": "AP-BT-CTSV-U6",
    "VĂN PHÒNG FE": "AP-Tang-5-503-U6",
    "MÁY PHOTO VĂN PHÒNG FSC": "AP-GM-VPFSC-U6P",
    "VĂN PHÒNG FSC": "AP-GM-VPFSC-U6P",
    "GV FSC": "AP-GM-GV-FSC-U6P",
    "TUYỂN SINH FSC": "AP-GM-PDichVu-U6P"
  };

  useEffect(() => {
    // Xử lý dữ liệu cục bộ thay vì fetch
    const processedData = printersData.map(printer => ({
      ...printer,
      driverUrl: driverUrls[printer.name] || '#',
      manualUrl: manualUrls[printer.name] || '#',
      wifi: wifiConnections[printer.department] || 'Chưa xác định'
    }));

    setGroupedPrinters({
      "Đại Học": processedData.filter(p => p.type === 'university'),
      "Phổ Thông": processedData.filter(p => p.type === 'high_school')
    });
    setLoading(false);
  }, []);

  const handleWifiClick = (wifiName) => {
    if (!wifiName || wifiName === 'Chưa xác định') {
      alert('Chưa xác định WiFi cho máy in này.');
      return;
    }
    // Hiển thị thông tin WiFi
    alert(`WiFi kết nối: ${wifiName}`);
  };

  const handleAction = (printer, type) => {
    if (printer[`${type}Url`] === '#') {
      alert(type === 'driver' ? 'Driver chưa có sẵn để tải về' : 'Hướng dẫn chưa có sẵn');
      return false;
    }
    console.log(`${type === 'driver' ? 'Downloading' : 'Viewing'} ${type} for printer: ${printer.name}`);
    return true;
  };

  if (loading) {
    return <div className="loading">Đang tải danh sách máy in...</div>;
  }

  return (
    <div className="printer-list-container">
      <h1>Danh sách máy in</h1>
      {Object.entries(groupedPrinters).map(([groupName, printers]) => (
        <div key={groupName} className="printer-group">
          <h2 className="group-title">{groupName}</h2>
          <div className="table-responsive">
            <table className="printer-table">
              <thead>
                <tr>
                  <th className="col-name">TÊN THIẾT BỊ</th>
                  <th className="col-dept">PHÒNG/BAN</th>
                  <th className="col-ip">IP</th>
                  <th className="col-mac">MAC</th>
                  <th className="col-location">WIFI KẾT NỐI</th>
                  <th className="col-driver">DRIVER</th>
                  <th className="col-manual">HƯỚNG DẪN</th>
                </tr>
              </thead>
              <tbody>
                {printers.map((printer) => (
                  <tr key={printer.id}>
                    <td className="col-name">{printer.name}</td>
                    <td className="col-dept">{printer.department}</td>
                    <td className="col-ip">{printer.ip}</td>
                    <td className="col-mac">{printer.mac}</td>
                    <td className="col-location">
                      <button 
                        className="wifi-btn"
                        onClick={() => handleWifiClick(printer.wifi)}
                        title={`WiFi: ${printer.wifi}`}
                      >
                        {printer.wifi}
                      </button>
                    </td>
                    <td className="col-driver">
                      <a 
                        href={printer.driverUrl} 
                        className="driver-link"
                        onClick={(e) => !handleAction(printer, 'driver') && e.preventDefault()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tải về
                      </a>
                    </td>
                    <td className="col-manual">
                      <a 
                        href={printer.manualUrl} 
                        className="manual-link"
                        onClick={(e) => !handleAction(printer, 'manual') && e.preventDefault()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Xem hướng dẫn
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrinterList;