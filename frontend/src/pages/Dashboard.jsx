function Dashboard() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div className="container mt-5">
            <h1>Dashboarc Page</h1>

            <button 
            className="btn btn-danger mt-3"
            onClick={handleLogout}
            >

                Logout
            </button>
        </div>
    );
}

export default Dashboard;