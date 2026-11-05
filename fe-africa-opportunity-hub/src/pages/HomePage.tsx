import {
  Search,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  HandCoins,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Compass,
  Globe2,
} from 'lucide-react';

import { Link } from 'react-router';
import { useState, type FormEvent } from 'react';

import OpportunityCard from '../components/opportunities/OpportunityCard';
import { opportunities } from '../data/opportunities';
import type { OpportunityCategory } from '../types/opportunity';

import './HomePage.css';

const categories: {
  name: OpportunityCategory;
  description: string;
  icon: typeof BriefcaseBusiness;
}[] = [
  {
    name: 'Jobs',
    description: 'Find your next career opportunity.',
    icon: BriefcaseBusiness,
  },
  {
    name: 'Scholarships',
    description: 'Access educational funding.',
    icon: GraduationCap,
  },
  {
    name: 'Internships',
    description: 'Gain practical experience.',
    icon: Compass,
  },
  {
    name: 'Fellowships',
    description: 'Develop your skills and leadership.',
    icon: Users,
  },
  {
    name: 'Grants',
    description: 'Find funding for your ideas.',
    icon: HandCoins,
  },
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const featuredOpportunities = opportunities.filter(
    (opportunity) => opportunity.featured,
  );

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchTerm.trim();

    if (!query) {
      window.location.href = '/opportunities';
      return;
    }

    window.location.href = `/opportunities?q=${encodeURIComponent(query)}`;
  }

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__container">
          <div className="hero__content">
            <span className="hero__eyebrow">
              <Globe2 size={16} aria-hidden="true" />
              Opportunities across Africa and beyond
            </span>

            <h1 className="hero__title">
              Your next opportunity
              <span> starts here.</span>
            </h1>

            <p className="hero__description">
              Discover jobs, scholarships, internships, fellowships,
              and grants that help you learn, grow, and build your future.
            </p>

            <form className="hero__search" onSubmit={handleSearch}>
              <Search
                className="hero__search-icon"
                size={21}
                aria-hidden="true"
              />

              <label className="visually-hidden" htmlFor="hero-search">
                Search opportunities
              </label>

              <input
                id="hero-search"
                type="search"
                placeholder="Search jobs, scholarships, organizations..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />

              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>

            <p className="hero__supporting-text">
              Explore opportunities. Discover possibilities.
            </p>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual-circle hero__visual-circle--outer" />
            <div className="hero__visual-circle hero__visual-circle--inner" />

            <div className="hero__visual-content">
              <div className="hero__visual-icon">
                <Lightbulb size={46} strokeWidth={1.5} />
              </div>

              <span className="hero__visual-title">
                Your potential
              </span>

              <span className="hero__visual-subtitle">
                Has no borders.
              </span>
            </div>

            <div className="hero__floating-card hero__floating-card--top">
              <GraduationCap size={20} />
              <span>Learn & grow</span>
            </div>

            <div className="hero__floating-card hero__floating-card--bottom">
              <BriefcaseBusiness size={20} />
              <span>Build your career</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-heading__eyebrow">
                FIND YOUR PATH
              </span>

              <h2 className="section-heading__title">
                Explore by category
              </h2>

              <p className="section-heading__description">
                Whatever your goals, find opportunities that help you
                take the next step.
              </p>
            </div>
          </div>

          <div className="categories-grid">
            {categories.map((category) => {
              const CategoryIcon = category.icon;

              return (
                <Link
                  key={category.name}
                  to={`/opportunities?category=${encodeURIComponent(
                    category.name,
                  )}`}
                  className="category-card"
                >
                  <div className="category-card__icon">
                    <CategoryIcon size={25} strokeWidth={1.8} />
                  </div>

                  <h3>{category.name}</h3>

                  <p>{category.description}</p>

                  <span className="category-card__link">
                    Explore <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="featured-section">
        <div className="container">
          <div className="section-heading section-heading--row">
            <div>
              <span className="section-heading__eyebrow">
                HANDPICKED FOR DISCOVERY
              </span>

              <h2 className="section-heading__title">
                Featured opportunities
              </h2>

              <p className="section-heading__description">
                Explore a selection of opportunities worth discovering.
              </p>
            </div>

            <Link
              to="/opportunities"
              className="text-link featured-section__view-all"
            >
              View all opportunities <ArrowRight size={17} />
            </Link>
          </div>

          <div className="opportunities-grid">
            {featuredOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
              />
            ))}
          </div>

          <div className="featured-section__mobile-link">
            <Link to="/opportunities" className="btn btn-secondary">
              Explore all opportunities <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Africa Opportunity Hub */}
      <section className="why-section">
        <div className="container why-section__container">
          <div className="why-section__intro">
            <span className="section-heading__eyebrow">
              WHY AFRICA OPPORTUNITY HUB?
            </span>

            <h2 className="section-heading__title">
              Opportunities should be easier to find.
            </h2>

            <p className="section-heading__description">
              Finding your next step shouldn't mean searching dozens
              of different websites. We're bringing opportunities
              together in one place.
            </p>
          </div>

          <div className="why-section__features">
            <article className="why-feature">
              <div className="why-feature__icon">
                <Compass size={25} />
              </div>

              <h3>Discover more</h3>

              <p>
                Explore opportunities across careers, education,
                leadership, and innovation.
              </p>
            </article>

            <article className="why-feature">
              <div className="why-feature__icon">
                <Search size={25} />
              </div>

              <h3>Find what fits</h3>

              <p>
                Search for opportunities that match your interests,
                goals, and eligibility.
              </p>
            </article>

            <article className="why-feature">
              <div className="why-feature__icon">
                <ShieldCheck size={25} />
              </div>

              <h3>Apply with confidence</h3>

              <p>
                Find key details and links to the organizations
                offering each opportunity.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-section__content">
            <div className="cta-section__icon">
              <Lightbulb size={30} />
            </div>

            <h2>Your next chapter could start today.</h2>

            <p>
              Explore opportunities, discover new possibilities,
              and take a step toward your goals.
            </p>

            <Link to="/opportunities" className="btn cta-section__button">
              Start exploring <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;