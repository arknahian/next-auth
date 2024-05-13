export const authConfig = {
    providers:[],
    pages: {
      signIn: "/logIn",
    },
    callbacks: {
      authorized({ auth, request }) {
        const isLoggedIn = auth?.user;
        const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false;
        } else if (isLoggedIn) {
          // This allows to navigate to dashboard

          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
        return true;
      },
    },
  };