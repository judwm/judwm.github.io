---
title: Portfolio
permalink: /portfolio/
layout: page
excerpt: Collection of my projects and works
comments: false
---

{% for project in site.portfolio %}
<article class="portfolio-item">
  <div class="portfolio-image">
    <img src="{{ project.image }}" alt="{{ project.title }}">
  </div>
  <div class="portfolio-content">
    <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
    <p>{{ project.description }}</p>
    {% if project.technologies %}
    <div class="technologies">
      {% for tech in project.technologies %}
        <span class="tech-tag">{{ tech }}</span>
      {% endfor %}
    </div>
    {% endif %}
    {% if project.project_url %}
    <a href="{{ project.project_url }}" class="project-link" target="_blank">View Project</a>
    {% endif %}
  </div>
</article>
{% endfor %}
