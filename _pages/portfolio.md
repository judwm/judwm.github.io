---
layout: page
title: Portfolio
permalink: /portfolio/
---

# My Portfolio

Welcome to my portfolio! Here you'll find a collection of my projects and work.

{% for project in site.projects %}
<article class="project-item">
  <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
  
  {% if project.thumbnail %}
  <img src="{{ project.thumbnail }}" alt="{{ project.title }}" class="project-thumbnail">
  {% endif %}
  
  <p>{{ project.description }}</p>
  
  {% if project.technologies %}
  <div class="technologies">
    <strong>Technologies:</strong>
    {% for tech in project.technologies %}
    <span class="tech-tag">{{ tech }}</span>
    {% endfor %}
  </div>
  {% endif %}
  
  {% if project.project_url %}
  <a href="{{ project.project_url }}" class="project-link" target="_blank">View Project →</a>
  {% endif %}
</article>
{% endfor %}
