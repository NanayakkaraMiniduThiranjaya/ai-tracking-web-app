
export interface Hospital {
    id: string;
    name: string;
    address: string;
    city: string;
    phone: string;
    specialties: string[];
    rating: number;
    imageUrl: string;
    aiHint: string;
    description: string;
    services: string[];
    timings: string;
}

export const mockHospitals: Hospital[] = [
    // Colombo Hospitals
    {
        id: "1",
        name: "National Hospital of Sri Lanka",
        address: "Regent Street, Colombo 08, Sri Lanka",
        city: "Colombo",
        phone: "+94 11 269 1111",
        specialties: ["Cardiology", "Oncology", "Neurology", "Nephrology", "Emergency Medicine"],
        rating: 4.6,
        imageUrl: "https://media.istockphoto.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=DT6YDRZMH5G5dL-Qv6VwPpVDpIDxJqkAY4Gg0ojGi58=",
        aiHint: "national hospital sri lanka",
        description: "The premier government hospital in Sri Lanka, providing comprehensive tertiary care services with state-of-the-art facilities and expert medical professionals.",
        services: ["Emergency Care", "Intensive Care Unit (ICU)", "Surgical Services", "Radiology", "Pharmacy", "Blood Bank", "Dialysis"],
        timings: "Open 24 hours"
    },
    {
        id: "2",
        name: "Asiri Central Hospital",
        address: "114 Norris Canal Road, Colombo 10, Sri Lanka",
        city: "Colombo",
        phone: "+94 11 466 5500",
        specialties: ["Cardiology", "Orthopedics", "General Surgery", "Pediatrics", "Obstetrics & Gynecology"],
        rating: 4.7,
        imageUrl: "https://media.istockphoto.com/id/1270759310/photo/ambulance-at-fiona-stanley-hospital-emergency.jpg?s=612x612&w=0&k=20&c=G9Nq0QSAvoZcu4q7zAjhH6kVEVPNK686C3Jha5ERyo4=",
        aiHint: "private hospital sri lanka",
        description: "Leading private healthcare provider in Sri Lanka offering world-class medical services with international standards and latest technology.",
        services: ["Emergency Care", "Heart Surgery", "Orthopedic Surgery", "Maternity Ward", "Diagnostic Imaging", "Laboratory Services"],
        timings: "Open 24 hours"
    },
    {
        id: "3",
        name: "Nawaloka Hospital",
        address: "23 Deshamanya H K Dharmadasa Mawatha, Colombo 02, Sri Lanka",
        city: "Colombo",
        phone: "+94 11 544 4444",
        specialties: ["Cardiology", "Oncology", "Neurosurgery", "Gastroenterology", "Urology"],
        rating: 4.5,
        imageUrl: "https://media.istockphoto.com/id/489041732/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=o7p8qoMFYC0VdU8jhf-L3QJmZuj-NfLzyD5bvm1N1yg=",
        aiHint: "modern hospital colombo",
        description: "Renowned for excellence in healthcare delivery, offering comprehensive medical and surgical services with cutting-edge technology.",
        services: ["Emergency Care", "Cancer Treatment", "Neurosurgery", "Kidney Transplant", "IVF Treatment", "Rehabilitation"],
        timings: "Open 24 hours"
    },
    {
        id: "4",
        name: "Lanka Hospital",
        address: "578 Elvitigala Mawatha, Colombo 05, Sri Lanka",
        city: "Colombo",
        phone: "+94 11 543 0000",
        specialties: ["Cardiology", "Orthopedics", "Neurology", "Plastic Surgery", "Dermatology"],
        rating: 4.4,
        imageUrl: "https://media.istockphoto.com/id/472497048/photo/generic-hospital-building.jpg?s=612x612&w=0&k=20&c=IdSV26fTSZTupDBAXy6lQYS6bu7mZ2wBvyYf16RMZdo=",
        aiHint: "lanka hospital colombo",
        description: "Premium healthcare facility providing personalized medical care with state-of-the-art equipment and internationally trained specialists.",
        services: ["Emergency Care", "Heart Surgery", "Joint Replacement", "Cosmetic Surgery", "Dental Care", "Health Check-ups"],
        timings: "Open 24 hours"
    },
    {
        id: "5",
        name: "Apollo Hospital Colombo",
        address: "578 Elvitigala Mawatha, Narahenpita, Colombo 05, Sri Lanka",
        city: "Colombo",
        phone: "+94 11 530 0000",
        specialties: ["Cardiology", "Oncology", "Transplant Surgery", "Neurosurgery", "Critical Care"],
        rating: 4.8,
        imageUrl: "https://media.istockphoto.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=DT6YDRZMH5G5dL-Qv6VwPpVDpIDxJqkAY4Gg0ojGi58=",
        aiHint: "apollo hospital",
        description: "Part of the prestigious Apollo Healthcare Group, offering world-class healthcare services with international protocols and standards.",
        services: ["Emergency Care", "Organ Transplant", "Cancer Treatment", "Robotic Surgery", "Advanced Diagnostics", "Telemedicine"],
        timings: "Open 24 hours"
    },

    // Kandy Hospitals
    {
        id: "6",
        name: "Teaching Hospital Kandy",
        address: "William Gopallawa Mawatha, Kandy 20000, Sri Lanka",
        city: "Kandy",
        phone: "+94 81 223 3337",
        specialties: ["General Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology", "Orthopedics"],
        rating: 4.3,
        imageUrl: "https://media.istockphoto.com/id/1270759310/photo/ambulance-at-fiona-stanley-hospital-emergency.jpg?s=612x612&w=0&k=20&c=G9Nq0QSAvoZcu4q7zAjhH6kVEVPNK686C3Jha5ERyo4=",
        aiHint: "teaching hospital kandy",
        description: "Major tertiary care hospital serving the Central Province with comprehensive medical education and patient care facilities.",
        services: ["Emergency Care", "General Surgery", "Maternity Services", "Pediatric Care", "Radiology", "Laboratory Services"],
        timings: "Open 24 hours"
    },
    {
        id: "7",
        name: "Asiri Hospital Kandy",
        address: "No. 21, Anniwatte Road, Kandy 20000, Sri Lanka",
        city: "Kandy",
        phone: "+94 81 220 5000",
        specialties: ["Cardiology", "General Surgery", "Orthopedics", "ENT", "Dermatology"],
        rating: 4.5,
        imageUrl: "https://media.istockphoto.com/id/489041732/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=o7p8qoMFYC0VdU8jhf-L3QJmZuj-NfLzyD5bvm1N1yg=",
        aiHint: "asiri kandy hospital",
        description: "Modern private healthcare facility in the hill capital, providing quality medical services with personalized care.",
        services: ["Emergency Care", "Surgical Procedures", "Diagnostic Services", "Pharmacy", "Physiotherapy", "Health Screening"],
        timings: "Mon-Sun: 6 AM - 12 AM, Emergency 24/7"
    },

    // Galle Hospitals
    {
        id: "8",
        name: "Teaching Hospital Karapitiya",
        address: "Karapitiya, Galle 80000, Sri Lanka",
        city: "Galle",
        phone: "+94 91 223 2261",
        specialties: ["Cardiology", "General Surgery", "Neurosurgery", "Pediatrics", "Emergency Medicine"],
        rating: 4.2,
        imageUrl: "https://media.istockphoto.com/id/472497048/photo/generic-hospital-building.jpg?s=612x612&w=0&k=20&c=IdSV26fTSZTupDBAXy6lQYS6bu7mZ2wBvyYf16RMZdo=",
        aiHint: "karapitiya hospital galle",
        description: "Major teaching hospital serving the Southern Province with advanced medical facilities and specialist services.",
        services: ["Emergency Care", "Trauma Care", "Cardiac Surgery", "Neurosurgery", "ICU", "Dialysis"],
        timings: "Open 24 hours"
    },
    {
        id: "9",
        name: "Ruhunu Hospital",
        address: "Matara Road, Galle 80000, Sri Lanka",
        city: "Galle",
        phone: "+94 91 223 4567",
        specialties: ["General Medicine", "Surgery", "Obstetrics & Gynecology", "Pediatrics", "Orthopedics"],
        rating: 4.1,
        imageUrl: "https://media.istockphoto.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=DT6YDRZMH5G5dL-Qv6VwPpVDpIDxJqkAY4Gg0ojGi58=",
        aiHint: "ruhunu hospital galle",
        description: "Comprehensive healthcare facility providing quality medical services to the Southern Province community.",
        services: ["General Medicine", "Surgery", "Maternity Care", "Laboratory", "X-Ray", "Pharmacy"],
        timings: "Open 24 hours"
    },

    // Jaffna Hospitals
    {
        id: "10",
        name: "Teaching Hospital Jaffna",
        address: "Colombo Road, Jaffna 40000, Sri Lanka",
        city: "Jaffna",
        phone: "+94 21 222 2261",
        specialties: ["General Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology", "Orthopedics"],
        rating: 4.0,
        imageUrl: "https://media.istockphoto.com/id/1270759310/photo/ambulance-at-fiona-stanley-hospital-emergency.jpg?s=612x612&w=0&k=20&c=G9Nq0QSAvoZcu4q7zAjhH6kVEVPNK686C3Jha5ERyo4=",
        aiHint: "jaffna hospital",
        description: "Primary healthcare center for the Northern Province, offering comprehensive medical services and emergency care.",
        services: ["Emergency Care", "General Surgery", "Maternity Services", "Pediatric Care", "Radiology", "Blood Bank"],
        timings: "Open 24 hours"
    },

    // Kurunegala Hospitals
    {
        id: "11",
        name: "Teaching Hospital Kurunegala",
        address: "Hospital Road, Kurunegala 60000, Sri Lanka",
        city: "Kurunegala",
        phone: "+94 37 222 2261",
        specialties: ["General Medicine", "Surgery", "Cardiology", "Pediatrics", "Obstetrics & Gynecology"],
        rating: 4.1,
        imageUrl: "https://media.istockphoto.com/id/489041732/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=o7p8qoMFYC0VdU8jhf-L3QJmZuj-NfLzyD5bvm1N1yg=",
        aiHint: "kurunegala hospital",
        description: "Regional hospital serving North Western Province with comprehensive healthcare services and specialist care.",
        services: ["Emergency Care", "Surgery", "Cardiology", "Maternity Ward", "ICU", "Laboratory Services"],
        timings: "Open 24 hours"
    },

    // Anuradhapura Hospitals
    {
        id: "12",
        name: "Teaching Hospital Anuradhapura",
        address: "Maithripala Senanayake Mawatha, Anuradhapura 50000, Sri Lanka",
        city: "Anuradhapura",
        phone: "+94 25 222 2261",
        specialties: ["General Medicine", "Surgery", "Pediatrics", "Orthopedics", "ENT"],
        rating: 3.9,
        imageUrl: "https://media.istockphoto.com/id/472497048/photo/generic-hospital-building.jpg?s=612x612&w=0&k=20&c=IdSV26fTSZTupDBAXy6lQYS6bu7mZ2wBvyYf16RMZdo=",
        aiHint: "anuradhapura hospital",
        description: "Major hospital serving the North Central Province with essential medical services and emergency care facilities.",
        services: ["Emergency Care", "General Surgery", "Pediatric Care", "Orthopedic Services", "Maternity Care", "Pharmacy"],
        timings: "Open 24 hours"
    },

    // Batticaloa Hospitals
    {
        id: "13",
        name: "Teaching Hospital Batticaloa",
        address: "New Kalmunai Road, Batticaloa 30000, Sri Lanka",
        city: "Batticaloa",
        phone: "+94 65 222 2261",
        specialties: ["General Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology", "Emergency Medicine"],
        rating: 3.8,
        imageUrl: "https://media.istockphoto.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=DT6YDRZMH5G5dL-Qv6VwPpVDpIDxJqkAY4Gg0ojGi58=",
        aiHint: "batticaloa hospital",
        description: "Regional hospital providing healthcare services to the Eastern Province with focus on community health and emergency care.",
        services: ["Emergency Care", "Surgery", "Maternity Services", "Pediatric Care", "Laboratory", "X-Ray Services"],
        timings: "Open 24 hours"
    },

    // Ratnapura Hospitals
    {
        id: "14",
        name: "Provincial General Hospital Ratnapura",
        address: "Lower Street, Ratnapura 70000, Sri Lanka",
        city: "Ratnapura",
        phone: "+94 45 222 2261",
        specialties: ["General Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology", "Orthopedics"],
        rating: 4.0,
        imageUrl: "https://media.istockphoto.com/id/1270759310/photo/ambulance-at-fiona-stanley-hospital-emergency.jpg?s=612x612&w=0&k=20&c=G9Nq0QSAvoZcu4q7zAjhH6kVEVPNK686C3Jha5ERyo4=",
        aiHint: "ratnapura hospital",
        description: "Provincial hospital serving Sabaragamuwa Province with comprehensive medical services and emergency care.",
        services: ["Emergency Care", "General Surgery", "Maternity Ward", "Pediatric Services", "Radiology", "Pharmacy"],
        timings: "Open 24 hours"
    },

    // Specialized Hospitals
    {
        id: "15",
        name: "National Institute of Mental Health",
        address: "Angoda, Ragama 11010, Sri Lanka",
        city: "Ragama",
        phone: "+94 11 296 0261",
        specialties: ["Psychiatry", "Psychology", "Mental Health", "Addiction Treatment", "Child Psychiatry"],
        rating: 4.2,
        imageUrl: "https://media.istockphoto.com/id/489041732/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=o7p8qoMFYC0VdU8jhf-L3QJmZuj-NfLzyD5bvm1N1yg=",
        aiHint: "mental health hospital",
        description: "Premier mental health facility in Sri Lanka providing comprehensive psychiatric care and mental health services.",
        services: ["Psychiatric Consultation", "Counseling", "Addiction Treatment", "Rehabilitation", "Community Mental Health", "Research"],
        timings: "Mon-Fri: 8 AM - 4 PM, Emergency 24/7"
    },
    {
        id: "16",
        name: "National Cancer Institute Maharagama",
        address: "Maharagama 10280, Sri Lanka",
        city: "Maharagama",
        phone: "+94 11 285 0261",
        specialties: ["Oncology", "Radiation Therapy", "Chemotherapy", "Surgical Oncology", "Palliative Care"],
        rating: 4.4,
        imageUrl: "https://media.istockphoto.com/id/472497048/photo/generic-hospital-building.jpg?s=612x612&w=0&k=20&c=IdSV26fTSZTupDBAXy6lQYS6bu7mZ2wBvyYf16RMZdo=",
        aiHint: "cancer hospital sri lanka",
        description: "National center for cancer treatment providing comprehensive oncology services with advanced treatment modalities.",
        services: ["Cancer Treatment", "Radiation Therapy", "Chemotherapy", "Surgery", "Palliative Care", "Cancer Screening"],
        timings: "Mon-Fri: 8 AM - 4 PM, Emergency Cancer Care 24/7"
    }
];

export const getHospitalById = (id: string): Hospital | undefined => {
    return mockHospitals.find(hospital => hospital.id === id);
};
