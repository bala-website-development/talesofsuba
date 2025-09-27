import Layout from "@/components/Layout/Layout";
import React from "react";
import image from "@/images/pr_source.png"; // Main page image
import icon from "@/images/subaapplogo.jpg"; // Icon image for the app
import icon1 from "@/images/splitequal.png"; // Icon image for the app

const AdminHome = () => {
  return (
    <Layout pageTitle="Tales of SuBa - App Home" thumbnail={image.src} icon={icon.src} themecolor="#ffffff">
      <div className="container" style={styles.container}>
        {/* iPhone-like app icons */}
        <div style={styles.iconContainer}>
          <a href="/adminexpenses" style={styles.appIconLink}>
            <img src={image.src} alt="Expense Tracker" style={styles.appIcon} />
            <p style={styles.appText}>Expense Tracker</p>
          </a>
        </div>
        <div style={styles.iconContainer}>
          <a href="/adminsplitwise" style={styles.appIconLink}>
            <img src={icon1.src} alt="Split Equal" style={styles.appIcon} />
            <p style={styles.appText}>Split Equal</p>
          </a>
        </div>
      </div>
    </Layout>
  );
};

// CSS styles for iPhone-like app icons
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: "20px",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appIconLink: {
    textDecoration: "none",
    textAlign: "center",
  },
  appIcon: {
    width: "100px",
    height: "100px",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  appText: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#000",
  },
};

export default AdminHome;
