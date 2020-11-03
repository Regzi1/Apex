import React, { Component } from 'react';
import { Alert } from 'bootstrap-4-react';

function App() {
  return (
      <div class="navbar navbar-inverse">
          <div class="container-fluid">
              <div class="navbar-header">
                  <a class="navbar-brand" href="#">WebSiteName</a>
              </div>
              <ul class="nav navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link active" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Page 1</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Page 2</a>
                  </li>
              </ul>
              <ul class="nav navbar-nav">
                  <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                  <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
          </div>
      </div>
  );
}

export default App;
