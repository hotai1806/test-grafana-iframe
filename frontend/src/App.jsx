import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [dashboardUid, setDashboardUid] = useState(null);

  useEffect(() => {
    fetch("/api/search?type=dash-db")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setDashboardUid(data[0].uid);
        }
      })
      .catch((err) => console.error("Failed to fetch dashboards", err));
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* grafana/d-solo/null?orgId=1&from=1763684129792&to=1763705729792&timezone=browser&panelId=panel-4&__feature.dashboardSceneSolo=true */}
      {dashboardUid && (
        <iframe
          src={`/d/22e81737-1033-4690-b031-bc0896ef8af3/test-dashboard?orgId=1&kiosk`}
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Grafana Dashboard"
        />
      )}
    </div>
  );
}

export default App;
