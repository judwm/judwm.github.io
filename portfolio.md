---
title: Portfolio
permalink: /portfolio/
layout: page
excerpt: Collection of my projects and works
comments: false
---

<style>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 1rem 0;
}

@media (min-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.portfolio-item {
  border: 1px solid var(--light);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.portfolio-content {
  padding-top: 1.5rem;
}

.portfolio-content h2 {
  margin: 0;
  font-size: 1.5rem;
}

.portfolio-content p {
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--light);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem 0.25rem 0;
  border-radius: 15px;
  font-size: 0.875rem;
}
</style>

<div class="portfolio-grid">
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
</div>
