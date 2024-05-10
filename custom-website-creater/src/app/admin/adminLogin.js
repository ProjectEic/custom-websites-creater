import React from "react";
import {login} from "../firebase_connecter";



const handleSubmit = (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    login(email, password ).then((res) => {
        alert("Einloggen erfolgreich");
        // reload the page
        window.location.reload();
    }
    ).catch((err) => { 
        alert("Fehler beim Einloggen " + err);
    }
    );
}

const AdminLogin = () => {


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="container mx-auto px-4 py-8 max-w-md">
                <h1 className="text-3xl font-semibold mb-4 text-center">Admin Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
                        <input type="text" id="email" className="w-full border border-gray-300 rounded px-4 py-2 text-gray-950"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-semibold mb-1">Passwort:</label>
                        <input type="password" id="password" className="w-full border border-gray-300 rounded px-4 py-2 text-gray-950"/>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-auto block">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
