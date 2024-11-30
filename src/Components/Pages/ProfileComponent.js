import '../../CSS/ProfileCSS.css';
import { BarChart } from '@mui/x-charts/BarChart';
import NavbarComponent from "./NavbarComponent";
import PersonDescryptionComponent from "../ProfileComponents/PersonDescryptionComponent";

function ProfileComponent() {
    const UserInfo = {
        firstName: "David",
        lastName: "Zeff",
        phoneNumber: "0545235567",
        email: "dpzeff@gmail.com",
        college: "Sapir College",
    };
    
    // Grades data
    const grades = [
        { topic: 'Physics', grade: 70 },
        { topic: 'Physics 2', grade: 75 },
        { topic: 'Physics 3', grade: 76 },
        { topic: 'Math 1', grade: 80 },
        { topic: 'Math 2', grade: 90 },
        { topic: 'Math 3', grade: 95 },
        { topic: 'Science', grade: 45 },
        { topic: 'Chemistry', grade: 65 },
        { topic: 'Biology', grade: 85 },
        { topic: 'History', grade: 50 },
    ];

    return (
        <>
            <NavbarComponent />
            <div className="profile-container">
                <div className="person-description">
                    <PersonDescryptionComponent UserInfo={UserInfo} />
                </div>
                <div className="grades-by-year-list" style={{ width: '100%', height: '500px' }}>
                    <BarChart
                        dataset={grades}
                        xAxis={[
                            {
                                dataKey: 'grade',
                                scaleType: 'linear',
                                label: 'Grade',
                                min: 0,
                                max: 100,
                            },
                        ]}
                        yAxis={[
                            {
                                dataKey: 'topic',
                                scaleType: 'band',
                                label: 'Topics',
                            },
                        ]}
                        series={[
                            {
                                dataKey: 'grade',
                                label: 'Grades',
                            },
                        ]}
                        layout="horizontal" // This makes the bars horizontal
                        width={700}
                        height={500}
                    />
                </div>
                <div className="grades-by-year-graph"></div>
            </div>
        </>
    );
}

export default ProfileComponent;

