document.addEventListener("DOMContentLoaded", () => {

    let d = window.innerWidth;
    
    function ZiSSes1() {

        let Lists = document.getElementById("Lists");
        let dLists = window.getComputedStyle(Lists);
        
        
        let List_SSss = document.getElementById("List_SS");
        let List_SSV = window.getComputedStyle(List_SSss);
        let WI = Number(dLists.width.split("px")[0]);
        let d = Number(List_SSV.width.split("px")[0]);
        
        let z = d - WI - 50;
        console.log(z);
        document.getElementById("ITEM").style.width = z + "px";
    }
    if (d>750) {
        ZiSSes1();
    }




























});

function LIST_BTN(Z) {

    if (Z == "Notification") {
        window.location.replace("/notification");
        // window.location.href = "http://192.168.0.44/notification";
    } else if (Z == "Order") {
        window.location.replace("/order");
    } else if (Z == "Profile") {
        window.location.replace("/profile");
    } else if (Z == "Cart") {
        window.location.replace("/cart");
    } else if (Z == "Favorite") {
        window.location.replace("/favorite");
    } else if (Z == "SB Coins") {
        window.location.replace("/sb_coins");
    } else if (Z == "Setting") {
        window.location.replace("/setting");
    } else if (Z == "Address") {
        window.location.replace("/address");
        
    }
    
};

document.getElementById("CLOSE_ADDRESS").addEventListener('click', ()=>{
    document.getElementById("ADdddressssss").style.display = "none";
});




function STATE_DISTRICT() {
    var AndraPradesh = ["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"];
    var ArunachalPradesh = ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"];
    var Assam = ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"];
    var Bihar = ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"];
    var Chhattisgarh = ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"];
    var Goa = ["North Goa","South Goa"];
    var Gujarat = ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"];
    var Haryana = ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"];
    var HimachalPradesh = ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"];
    var JammuKashmir = ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"];
    var Jharkhand = ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"];
    var Karnataka = ["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"];
    var Kerala = ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"];
    var MadhyaPradesh = ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"];
    var Maharashtra = ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"];
    var Manipur = ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"];
    var Meghalaya = ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"];
    var Mizoram = ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"];
    var Nagaland = ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"];
    var Orissa = ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"];
    var Punjab = ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"];
    var Rajasthan = ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"];
    var Sikkim = ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"];
    var TamilNadu = ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"];
    var Telangana = ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"];
    var Tripura = ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"];
    var UttarPradesh = ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"];
    var Uttarakhand  = ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"];
    var WestBengal = ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
    var AndamanNicobar = ["Nicobar","North Middle Andaman","South Andaman"];
    var Chandigarh = ["Chandigarh"];
    var DadraHaveli = ["Dadra Nagar Haveli"];
    var DamanDiu = ["Daman","Diu"];
    var Delhi = ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"];
    var Lakshadweep = ["Lakshadweep"];
    var Pondicherry = ["Karaikal","Mahe","Puducherry","Yanam"];


    document.getElementById("State_Name").addEventListener("change", function () {
        var StateSelected = this.value;
        var optionsList;
        var htmlString = "";
        switch (StateSelected) {
            case "Andra Pradesh":
                optionsList = AndraPradesh;
                break;
            case "Arunachal Pradesh":
                optionsList = ArunachalPradesh;
                break;
            case "Assam":
                optionsList = Assam;
                break;
            case "Bihar":
                optionsList = Bihar;
                break;
            case "Chhattisgarh":
                optionsList = Chhattisgarh;
                break;
            case "Goa":
                optionsList = Goa;
                break;
            case  "Gujarat":
                optionsList = Gujarat;
                break;
            case "Haryana":
                optionsList = Haryana;
                break;
            case "Himachal Pradesh":
                optionsList = HimachalPradesh;
                break;
            case "Jammu and Kashmir":
                optionsList = JammuKashmir;
                break;
            case "Jharkhand":
                optionsList = Jharkhand;
                break;
            case  "Karnataka":
                optionsList = Karnataka;
                break;
            case "Kerala":
                optionsList = Kerala;
                break;
            case  "Madya Pradesh":
                optionsList = MadhyaPradesh;
                break;
            case "Maharashtra":
                optionsList = Maharashtra;
                break;
            case  "Manipur":
                optionsList = Manipur;
                break;
            case "Meghalaya":
                optionsList = Meghalaya ;
                break;
            case  "Mizoram":
                optionsList = Mizoram;
                break;
            case "Nagaland":
                optionsList = Nagaland;
                break;
            case  "Orissa":
                optionsList = Orissa;
                break;
            case "Punjab":
                optionsList = Punjab;
                break;
            case  "Rajasthan":
                optionsList = Rajasthan;
                break;
            case "Sikkim":
                optionsList = Sikkim;
                break;
            case  "Tamil Nadu":
                optionsList = TamilNadu;
                break;
            case  "Telangana":
                optionsList = Telangana;
                break;
            case "Tripura":
                optionsList = Tripura ;
                break;
            case  "Uttaranchal":
                optionsList = Uttarakhand;
                break;
            case  "Uttar Pradesh":
                optionsList = UttarPradesh;
                break;
            case "West Bengal":
                optionsList = WestBengal;
                break;
            case  "Andaman and Nicobar Islands":
                optionsList = AndamanNicobar;
                break;
            case "Chandigarh":
                optionsList = Chandigarh;
                break;
            case  "Dadar and Nagar Haveli":
                optionsList = DadraHaveli;
                break;
            case "Daman and Diu":
                optionsList = DamanDiu;
                break;
            case  "Delhi":
                optionsList = Delhi;
                break;
            case "Lakshadweep":
                optionsList = Lakshadweep ;
                break;
            case  "Pondicherry":
                optionsList = Pondicherry;
                break;
        }
        var selectElement = document.getElementById("District_Name");
        for (var i = 0; i < optionsList.length; i++) {
            htmlString += "<option value='" + optionsList[i] + "'>" + optionsList[i] + "</option>";
        }
        selectElement.innerHTML = htmlString;
    })
}


STATE_DISTRICT();


function STATE_DISTRICT1() {
    var AndraPradesh = ["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"];
    var ArunachalPradesh = ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"];
    var Assam = ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"];
    var Bihar = ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"];
    var Chhattisgarh = ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"];
    var Goa = ["North Goa","South Goa"];
    var Gujarat = ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"];
    var Haryana = ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"];
    var HimachalPradesh = ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"];
    var JammuKashmir = ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"];
    var Jharkhand = ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"];
    var Karnataka = ["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"];
    var Kerala = ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"];
    var MadhyaPradesh = ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"];
    var Maharashtra = ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"];
    var Manipur = ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"];
    var Meghalaya = ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"];
    var Mizoram = ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"];
    var Nagaland = ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"];
    var Orissa = ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"];
    var Punjab = ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"];
    var Rajasthan = ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"];
    var Sikkim = ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"];
    var TamilNadu = ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"];
    var Telangana = ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"];
    var Tripura = ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"];
    var UttarPradesh = ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"];
    var Uttarakhand  = ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"];
    var WestBengal = ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
    var AndamanNicobar = ["Nicobar","North Middle Andaman","South Andaman"];
    var Chandigarh = ["Chandigarh"];
    var DadraHaveli = ["Dadra Nagar Haveli"];
    var DamanDiu = ["Daman","Diu"];
    var Delhi = ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"];
    var Lakshadweep = ["Lakshadweep"];
    var Pondicherry = ["Karaikal","Mahe","Puducherry","Yanam"];


    document.getElementById("Edit_State_Name").addEventListener("change", function () {
        var StateSelected = this.value;
        var optionsList;
        var htmlString = "";
        switch (StateSelected) {
            case "Andra Pradesh":
                optionsList = AndraPradesh;
                break;
            case "Arunachal Pradesh":
                optionsList = ArunachalPradesh;
                break;
            case "Assam":
                optionsList = Assam;
                break;
            case "Bihar":
                optionsList = Bihar;
                break;
            case "Chhattisgarh":
                optionsList = Chhattisgarh;
                break;
            case "Goa":
                optionsList = Goa;
                break;
            case  "Gujarat":
                optionsList = Gujarat;
                break;
            case "Haryana":
                optionsList = Haryana;
                break;
            case "Himachal Pradesh":
                optionsList = HimachalPradesh;
                break;
            case "Jammu and Kashmir":
                optionsList = JammuKashmir;
                break;
            case "Jharkhand":
                optionsList = Jharkhand;
                break;
            case  "Karnataka":
                optionsList = Karnataka;
                break;
            case "Kerala":
                optionsList = Kerala;
                break;
            case  "Madya Pradesh":
                optionsList = MadhyaPradesh;
                break;
            case "Maharashtra":
                optionsList = Maharashtra;
                break;
            case  "Manipur":
                optionsList = Manipur;
                break;
            case "Meghalaya":
                optionsList = Meghalaya ;
                break;
            case  "Mizoram":
                optionsList = Mizoram;
                break;
            case "Nagaland":
                optionsList = Nagaland;
                break;
            case  "Orissa":
                optionsList = Orissa;
                break;
            case "Punjab":
                optionsList = Punjab;
                break;
            case  "Rajasthan":
                optionsList = Rajasthan;
                break;
            case "Sikkim":
                optionsList = Sikkim;
                break;
            case  "Tamil Nadu":
                optionsList = TamilNadu;
                break;
            case  "Telangana":
                optionsList = Telangana;
                break;
            case "Tripura":
                optionsList = Tripura ;
                break;
            case  "Uttaranchal":
                optionsList = Uttarakhand;
                break;
            case  "Uttar Pradesh":
                optionsList = UttarPradesh;
                break;
            case "West Bengal":
                optionsList = WestBengal;
                break;
            case  "Andaman and Nicobar Islands":
                optionsList = AndamanNicobar;
                break;
            case "Chandigarh":
                optionsList = Chandigarh;
                break;
            case  "Dadar and Nagar Haveli":
                optionsList = DadraHaveli;
                break;
            case "Daman and Diu":
                optionsList = DamanDiu;
                break;
            case  "Delhi":
                optionsList = Delhi;
                break;
            case "Lakshadweep":
                optionsList = Lakshadweep ;
                break;
            case  "Pondicherry":
                optionsList = Pondicherry;
                break;
        }
        var selectElement = document.getElementById("Edit_District_Name");
        for (var i = 0; i < optionsList.length; i++) {
            htmlString += "<option value='" + optionsList[i] + "'>" + optionsList[i] + "</option>";
        }
        selectElement.innerHTML = htmlString;
    })
}






function Add_Box(){
    

    document.getElementById("ADdddressssss").style.display = "block";

}
document.addEventListener("DOMContentLoaded", ()=>{
    let d = document.getElementById("Edit_ADdddressssss")
    STATE_DISTRICT1();
    
    document.getElementById("Edit_CLOSE_ADDRESS").addEventListener('click', ()=>{
        document.getElementById("ADdddressssss").style.display = "none";
    });
    if (window.getComputedStyle(d).display == "block") {
        
        
        document.getElementById("Edit_Name").addEventListener('input', () => {
        document.getElementById("Message").style.display = "none";
    });
    document.getElementById("Edit_PIN").addEventListener('input', () => {
        document.getElementById("Message").style.display = "none";
    });
    document.getElementById("Edit_Locality").addEventListener('input', () => {
        document.getElementById("Message").style.display = "none";
    });
    document.getElementById("Edit_Landmark").addEventListener('input', () => {
        document.getElementById("Message").style.display = "none";
    });
    document.getElementById("Edit_Town").addEventListener('input', () => {
        document.getElementById("Message").style.display = "none";
    });
    document.getElementById("Edit_City").addEventListener('input', () => {
        document.getElementById("Message").style.display = "none";
    });
    document.getElementById("Edit_Mobile").addEventListener('input', () => {
        document.getElementById("Message").style.display = "none";
    });
    document.getElementById("Edit_Alt").addEventListener('input', () => {
        document.getElementById("Message").style.display = "none";
    });
    document.getElementById("Edit_State_Name").addEventListener('change', () => {
        document.getElementById("Message").style.display = "none";
    });
    document.getElementById("Edit_District_Name").addEventListener('change', () => {
        document.getElementById("Message").style.display = "none";
    });
}
})


document.getElementById("Name").addEventListener('input', () => {
    document.getElementById("Message").style.display = "none";
});
document.getElementById("PIN").addEventListener('input', () => {
    document.getElementById("Message").style.display = "none";
});
document.getElementById("Locality").addEventListener('input', () => {
    document.getElementById("Message").style.display = "none";
});
document.getElementById("Landmark").addEventListener('input', () => {
    document.getElementById("Message").style.display = "none";
});
document.getElementById("Town").addEventListener('input', () => {
    document.getElementById("Message").style.display = "none";
});
document.getElementById("City").addEventListener('input', () => {
    document.getElementById("Message").style.display = "none";
});
document.getElementById("Mobile").addEventListener('input', () => {
    document.getElementById("Message").style.display = "none";
});
document.getElementById("Alt").addEventListener('input', () => {
    document.getElementById("Message").style.display = "none";
});
document.getElementById("State_Name").addEventListener('change', () => {
    document.getElementById("Message").style.display = "none";
});
document.getElementById("District_Name").addEventListener('change', () => {
    document.getElementById("Message").style.display = "none";
});


function Add_Address() {
    let Name = document.getElementById("Name");
    let PIN = document.getElementById("PIN");
    let Locality = document.getElementById("Locality");
    let Landmark = document.getElementById("Landmark");
    let Town = document.getElementById("Town");
    let City = document.getElementById("City");
    let Mobile = document.getElementById("Mobile");
    let Alt = document.getElementById("Alt");
    Name = Name.value;
    PIN = PIN.value;
    Locality = Locality.value;
    Landmark = Landmark.value;
    Town = Town.value;
    City = City.value;
    Mobile = Mobile.value;
    Alt = Alt.value;
    let State_Name = document.getElementById("State_Name").value;
    let District_Name = document.getElementById("District_Name").value;


    if(Name == "" ||
    Name == null ||
    Name == " " ||
    Name.length < 3 ||
    PIN == "" ||
    PIN == null ||
    PIN == " " ||
    PIN.length != 6 ||
    Locality == "" ||
    Locality == null ||
    Locality == " " ||
    Locality.length < 3 ||
    Landmark == "" ||
    Landmark == null ||
    Landmark == " " ||
    Landmark.length < 3 ||
    Town == "" ||
    Town == null ||
    Town == " " ||
    Town.length < 3 ||
    City == "" ||
    City == null ||
    City == " " ||
    City.length < 3 ||
    State_Name == "" ||
    State_Name == null ||
    State_Name == " " ||
    State_Name.length < 3 ||
    District_Name == "" ||
    District_Name == null ||
    District_Name == " " ||
    District_Name.length < 3 ||
    Mobile == "" ||
    Mobile == null ||
    Mobile == " " ||
    Mobile.length != 10 ||
    Alt == "" ||
    Alt == null ||
    Alt == " " ||
    Alt.length != 10){
        
        document.getElementById("Message").style.display = "block";
        document.getElementById("Message").innerHTML = "Enter valid details / Blanks cann't be empty.";
        
        
    }else{
        document.getElementById("Message").style.display = "none";
        
        let jjso = {
            Name:Name,
            PIN:PIN,
            Locality:Locality,
            Landmark:Landmark,
            Town:Town,
            City:City,
            Mobile:Mobile,
            Alt:Alt,
            District_Name:District_Name,
            State_Name:State_Name,
        }

        let d = document.getElementById("SBTNN");
        d.onclick = "";

        fetch("/address_add",{
            method:"Post",
            body:JSON.stringify(jjso),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            let mes = data.Message
            if (mes == "Empty") {
                
                document.getElementById("Message").style.display = "block";
                document.getElementById("Message").innerHTML = "Enter valid details / Blanks cann't be empty.";
        
            }else{
                
                document.getElementById("Message").style.display = "block";
                document.getElementById("Message").style.color = "green";
                document.getElementById("Message").innerHTML = "Added successfully.";
                setTimeout(() => {
                    document.getElementById("Message").style.display = "none";
                    location.reload();
                    
                }, 2000);
                
            }
            // console.log(data);

        }).catch(e => {
            
            document.getElementById("Message").innerHTML = "Cann't connect to server";
            document.getElementById("Message").style.display = "block";
            
            let d = document.getElementById("SBTNN");
            d.onclick = "Add_Address();";
        })
        // console.log(jjso);

    }
    
}
function Edit_Address(ID) {
    let Name = document.getElementById("Edit_Name");
    let PIN = document.getElementById("Edit_PIN");
    let Locality = document.getElementById("Edit_Locality");
    let Landmark = document.getElementById("Edit_Landmark");
    let Town = document.getElementById("Edit_Town");
    let City = document.getElementById("Edit_City");
    let Mobile = document.getElementById("Edit_Mobile");
    let Alt = document.getElementById("Edit_Alt");
    Name = Name.value;
    PIN = PIN.value;
    Locality = Locality.value;
    Landmark = Landmark.value;
    Town = Town.value;
    City = City.value;
    Mobile = Mobile.value;
    Alt = Alt.value;
    let State_Name = document.getElementById("Edit_State_Name").value;
    let District_Name = document.getElementById("Edit_District_Name").value;


    if(Name == "" ||
    Name == null ||
    Name == " " ||
    Name.length < 3 ||
    PIN == "" ||
    PIN == null ||
    PIN == " " ||
    PIN.length != 6 ||
    Locality == "" ||
    Locality == null ||
    Locality == " " ||
    Locality.length < 3 ||
    Landmark == "" ||
    Landmark == null ||
    Landmark == " " ||
    Landmark.length < 3 ||
    Town == "" ||
    Town == null ||
    Town == " " ||
    Town.length < 3 ||
    City == "" ||
    City == null ||
    City == " " ||
    City.length < 3 ||
    State_Name == "" ||
    State_Name == null ||
    State_Name == " " ||
    State_Name.length < 3 ||
    District_Name == "" ||
    District_Name == null ||
    District_Name == " " ||
    District_Name.length < 3 ||
    Mobile == "" ||
    Mobile == null ||
    Mobile == " " ||
    Mobile.length != 10 ||
    Alt == "" ||
    Alt == null ||
    Alt == " " ||
    Alt.length != 10){
        
        document.getElementById("Edit_Message").style.display = "block";
        document.getElementById("Edit_Message").innerHTML = "Enter valid details / Blanks cann't be empty.";
        
        
    }else{
        document.getElementById("Edit_Message").style.display = "none";
        
        let jjso = {
            ID: ID,
            Name:Name,
            PIN:PIN,
            Locality:Locality,
            Landmark:Landmark,
            Town:Town,
            City:City,
            Mobile:Mobile,
            Alt:Alt,
            District_Name:District_Name,
            State_Name:State_Name,
        }

        let d = document.getElementById("Edit_SBTNN");
        d.onclick = "";

        fetch("/address_edit",{
            method:"Post",
            body:JSON.stringify(jjso),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            let mes = data.Message
            if (mes == "Empty") {
                
                document.getElementById("Edit_Message").style.display = "block";
                document.getElementById("Edit_Message").innerHTML = "Enter valid details / Blanks cann't be empty.";
        
            }else{
                
                document.getElementById("Edit_Message").style.display = "block";
                document.getElementById("Edit_Message").style.color = "green";
                document.getElementById("Edit_Message").innerHTML = "Edited successfully.";
                setTimeout(() => {
                    document.getElementById("Edit_Message").style.display = "none";
                    location.reload();
                    
                }, 2000);
                
            }
            // console.log(data);

        }).catch(e => {
            
            document.getElementById("Edit_Message").innerHTML = "Cann't connect to server";
            document.getElementById("Edit_Message").style.display = "block";
            
            let d = document.getElementById("Edit_SBTNN");
            d.onclick = `Edit_Address(${ID});`;
        })
        // console.log(jjso);

    }
    
}

function Message(Message){
    let Message_Back = document.getElementById("Message_Back")
    let Message_Main = document.getElementById("Message_Main")
    let Me = document.getElementById("Me")
    Me.innerHTML = Message;
    Message_Main.style.display = "flex";
    Message_Back.style.display = "flex";
    
    setTimeout(() => {
        // Message_Main.style.display = "none";
        // Message_Back.style.display = "none";
        Message_Main.style.animationName = "fade";
        Message_Back.style.animationName = "fade";
        
    }, 1000);


}



function DeleteAd(ID) {
    if (confirm("You are about to delete the address.")) {
        fetch("/address_del",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({ID:ID}),

        }).then(response=>{return response.json()}).then(data => {
            if(data.Message == "Deleted successfully."){
                Message(data.Message);
                setTimeout(() => {
                    location.reload();
                }, 3000);
            }else{
                Message(data.Message);

            }

        }).catch(e =>{
            Message("Connection error...");
        })
    }
    
}

function Set_Default(ID) {
    if (confirm("You are about to set the address as default.")) {
        fetch("/address_set_default",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({ID:ID}),

        }).then(response=>{return response.json()}).then(data => {
            if(data.Message == "Default address selected."){
                Message(data.Message);
                setTimeout(() => {
                    location.reload();
                }, 3000);
            }else{
                Message(data.Message);

            }

        }).catch(e =>{
            Message("Connection error...");
        })
    }
    
}


function Edit_Ad(ID) {
    
    fetch("/address_edit_req",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ID:ID}),

    }).then(response=>{return response.json()}).then(data => {
        document.getElementById("Edit_ADdddressssss").innerHTML = data.innder;
        document.getElementById("Edit_ADdddressssss").style.display = "block";

    }).catch(e =>{
        Message("Connection error...");
    })
    
    
}

















