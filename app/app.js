const express = require('express');
const morgan = require('morgan');

const app = express();


// Middleware Configuration
app.use(morgan("dev"));


// Router Configuration

// Admin Routes

// admin register  http://localhost:4000/api/v1/admins/register
app.post('/api/v1/admins/register',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin has been registered',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }
});

// admin login http://localhost:4000/api/v1/admins/login
app.post('/api/v1/admins/login',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin has logged in',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }
});

// Get all admins http://localhost:4000/api/v1/admins/
app.get('/api/v1/admins',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'All admins',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }
});


// Get single admin http://localhost:4000/api/v1/admins/14
app.get('/api/v1/admins/:id',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Single admin',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }
});


// Update admin http://localhost:4000/api/v1/admins/15
app.put('/api/v1/admins/:id',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Update admin',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }

});
 // Delete admin http://localhost:4000/api/v1/admins/15
 app.delete('/api/v1/admins/:id',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Delete admin',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }
});


// Admin Suspending teacher  http://localhost:4000/api/v1/admins/suspend/teacher/18
app.put('/api/v1/admins/suspend/teacher/:id',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin suspend teacher',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }
});


// Admin unsuspending teacher  http://localhost:4000/api/v1/admins/unsuspend/teacher/18
app.put('/api/v1/admins/unsuspend/teacher/:id',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin unsuspend teacher',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }
});


// Admin withdrawing teacher http://localhost:4000/api/v1/admins/withdraw/teacher/18
app.put('/api/v1/admins/withdraw/teacher/:id',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin withdraw teacher',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }
});


// Admin withdrawing teacher  http://localhost:4000/api/v1/admins/unwithdraw/teacher/18
app.put('/api/v1/admins/unwithdraw/teacher/:id',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin unwithdraw teacher',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }
});


// Admin publish exam results 
app.put('/api/v1/admins/publish/exam/:id',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin publish exam resiult',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }
});


// Admin unpublish exam results 
app.put('/api/v1/admins/unpublish/exam/:id',(req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin unpublish exam resiult',
        })
    } catch (error) {
        res.json({
            status: 'Failed',
            error: error.message
        });
    }
});




















module.exports = app;