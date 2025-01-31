// Handle Netlify Identity authentication
if (window.netlifyIdentity) {
    // Initialize Netlify Identity
    window.netlifyIdentity.on("init", user => {
        if (!user) {
            // Redirect to admin dashboard after successful login
            window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
            });
        } else {
            // User is already logged in
            console.log("User is already authenticated");
        }
    });

    // Handle login errors
    window.netlifyIdentity.on("error", err => {
        console.error("Netlify Identity error:", err);
    });
}
