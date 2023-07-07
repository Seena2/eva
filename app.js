const express= require('express');

//Setup express
const app=express();
//register the "EJS" view engine on the app
app.set('view engine', 'ejs');

//listen for requests on port ###
const port=process.env.port||3000;
app.listen(port,()=>console.log(`server start running on port: ${port}`));

//specify the public folder for static files like css and images
app.use(express.static('public'));

//Set routes to requsts and cooresponding response
//index page rendering
app.get('/',(req,res)=>{
res.render('index',{title:"Home"});
});

//Top-Nav routing
app.get('/faq', (req, res) => {
    res.render('faq', { title: "FAQ" });
});

app.get('/relatedlinks', (req, res) => {
    res.render('relatedlinks', { title: "FAQ" });
});

app.get('/jobs', (req, res) => {
    res.render('jobs', { title: "Jobs" });
});

app.get('/events', (req, res) => {
    res.render('events', { title: "Events" });
});

app.get('/helpEVA', (req, res) => {
    res.render('helpEVA', { title: "Help EVA" });
});

//Main Nav routing
app.get('/about', (req, res) => {
    res.render('about', { title: "About" });
});

app.get('/evj', (req, res) => {
    res.render('evj', { title: "journal-EVJ" });
});

app.get('/publication', (req, res) => {
    res.render('publication', { title: "Publication" });
});

app.get('/membership', (req, res) => {
    res.render('membership', { title: "Membership" });
});

app.get('/training', (req, res) => {
    res.render('training', { title: "Training" });
});

app.get('/projects', (req, res) => {
    res.render('projects', { title: "Projects" });
});

app.get('/conference', (req, res) => {
    res.render('conference', { title: "conference" });
});

app.get('/news', (req, res) => {
    res.render('news', { title: "News" });
});
app.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact Us" });
});

//for Submenus
app.get('/news/create', (req, res) => {
    res.render('create', { title: "Create News" });
});

//404 
app.use((req, res) => {
    res.status(404).render('404', { title: "404" });
});