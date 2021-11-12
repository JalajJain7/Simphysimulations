const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

//Simulation
router.get('/simulation', ensureAuthenticated, (req, res) =>
  res.render('Simulations/index', {
    user: req.user
  })
);

// /CircleSim3/index.html
router.get('/CircleSim3/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/CircleSim3/index.html', {
    user: req.user
  })
);

// CircleSim2/index.html
router.get('/CircleSim2/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/CircleSim2/index.html', {
    user: req.user
  })
);

// CircleSim1/index.html
router.get('/CircleSim1/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/CircleSim1/index.html', {
    user: req.user
  })
);

// CircleSim4/index.html  
router.get('/CircleSim4/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/CircleSim4/index.html', {
    user: req.user
  })
);


// Change Equation of a Graph/index.html
router.get('/ChangeEquationofaGraph/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/Change Equation of a Graph/index.html', {
    user: req.user
  })
);

//conic
router.get('/conic/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/conic/index.html', {
    user: req.user
  })
);

//Cosine
router.get('/Cosine/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/Cosine/index.html', {
    user: req.user
  })  
);

//extended
router.get('/extendedmeanvaluetheorem/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/extended mean Value theorem/index.html', {
    user: req.user
  })
);

//harmonic
router.get('/harmonicwaves/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/Harmonic Waves/index.html', {
    user: req.user
  })
);

//inversemappingofpowerfunction
router.get('/inversemappingofpowerfunciton/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/inverse mapping of power funciton/index.html', {
    user: req.user
  })
);

//Lagrangeinterpolation 
router.get('/Lagrangeinterpolation/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/Lagrange Interpolation/index.html', {
    user: req.user
  })
);

//Linearfucntion
router.get('/Linearfunction/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/Linear Function/index.html', {
    user: req.user
  })
);

//ParabolaII
router.get('/ParabolaII/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/ParabolaII/index.html', {
    user: req.user
  })
);

//Pendulum
router.get('/Pendulum/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/Pendulum/index.html', {
    user: req.user
  })
);

//Polar curve plotter
router.get('/PolarCurvePlotter/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/Polar curve plotter/index.html', {
    user: req.user
  })
);

//simple curve plotter
router.get('/simplecurveplotter/index.html', ensureAuthenticated, (req, res) =>
  res.render('Simulations/simple curve plotter/index.html', {
    user: req.user
  })
);

module.exports = router;