import NavBar from "@/app/ui/dashboard/navbar";

export default function Page() {
    return (
        <div className="page-bounds">
            <h1 className="page-title">about me</h1>
            <div className="flex justify-evenly py-10"> {/* row[column(profile pic + bio), technologies grid] */}
                <div className="flex flex-col justify-center"> {/* column(profile pic + bio) */}
                    <div className="h-10">
                        Picture
                    </div> {/* profile pic */}
                    <p> {/* bio */}
                        Hello! I'm Alvin...
                    </p>
                </div>
                <div className="flex flex-col justify-center"> {/* technologies grid */}
                    Technologies grid
                </div>
            </div>
        </div>
    );
}