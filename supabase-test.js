document
.getElementById("saveBtn")
.addEventListener("click", async () => {

try{

const response = await fetch(
"https://bhbolkpumkmhusenbhcz.supabase.co/rest/v1/guesses",
{
method: "POST",
headers: {
"apikey": "sb_publishable_Y-CZrSOy5hqtydErQP26DA_oZI4ydZw",
"Authorization": "Bearer sb_publishable_Y-CZrSOy5hqtydErQP26DA_oZI4ydZw",
"Content-Type": "application/json",
"Prefer": "return=minimal"
},
body: JSON.stringify({
guest_name: "TEST",
glas1: 1,
glas2: 2,
glas3: 3,
glas4: 4,
glas5: 5,
total_score: 0
})
}
);

alert("Status: " + response.status);

}catch(err){

alert("Fehler: " + err.message);

}

});
