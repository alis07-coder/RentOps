import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  CarFront,
  Check,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  Sparkles,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import { Brand } from "@/components/shell";
import { Badge } from "@/components/ui";
import heroPhoto from "../../public/images/hero-suv.jpg";

const features = [
  {
    icon: CarFront,
    title: "Fleet management",
    description:
      "See vehicle availability, track documents, and schedule maintenance from one place.",
  },
  {
    icon: CalendarDays,
    title: "Complete rental workflows",
    description: "Manage reservations, contracts, inspections, and returns with a clear next step.",
  },
  {
    icon: Wallet,
    title: "Connected rental finances",
    description: "Keep invoices, payments, and refundable deposits organized against each rental.",
  },
  {
    icon: Users,
    title: "Customer records",
    description:
      "Licences, contact details, and rental history for every driver, ready at the counter.",
  },
  {
    icon: Wrench,
    title: "Maintenance tracking",
    description: "Plan service work and keep vehicles out of the booking pool until they're ready.",
  },
  {
    icon: FileText,
    title: "Documents & exports",
    description:
      "Generate rental contracts and invoices as PDFs, and export your records any time.",
  },
];

const modules = [
  "Fleet",
  "Reservations",
  "Customers",
  "Inspections",
  "Invoices",
  "Deposits",
  "Maintenance",
];

const steps = [
  {
    title: "Create your workspace",
    description: "Sign up and set your business name, branch, and currency in a couple of minutes.",
  },
  {
    title: "Add your fleet",
    description: "Enter your vehicles with rates and documents so availability is always accurate.",
  },
  {
    title: "Start renting",
    description: "Book, hand over, inspect, and close rentals while billing keeps itself in sync.",
  },
];

function ProductPreview() {
  return (
    <div className="hero-visual">
      <div className="product-preview" aria-label="Illustrative RentOps dashboard">
        <div className="preview-browser">
          <i />
          <i />
          <i />
          <span>RentOps / Dashboard</span>
        </div>
        <div className="preview-app">
          <div className="preview-nav" aria-hidden="true">
            <span>
              <CarFront size={18} />
            </span>
            <LayoutDashboard size={18} />
            <CarFront size={18} />
            <CalendarDays size={18} />
            <Users size={18} />
            <Wallet size={18} />
          </div>
          <div className="preview-body">
            <div className="preview-heading">
              <strong>Dashboard</strong>
              <span>Coastal Car Rental</span>
            </div>
            <div className="preview-metrics">
              <div>
                <small>Available vehicles</small>
                <strong>
                  3 <span className="muted preview-metric-context">/ 6</span>
                </strong>
              </div>
              <div>
                <small>Active rentals</small>
                <strong>2</strong>
              </div>
              <div>
                <small>Outstanding</small>
                <strong>$845</strong>
              </div>
            </div>
            <div className="preview-table">
              <div className="preview-table-head">
                <span>Fleet overview</span>
                <span>6 vehicles</span>
              </div>
              <div className="preview-table-row">
                <strong>Toyota Corolla</strong>
                <Badge value="AVAILABLE" />
              </div>
              <div className="preview-table-row">
                <strong>Kia Sportage</strong>
                <Badge value="ACTIVE" />
              </div>
              <div className="preview-table-row">
                <strong>Volkswagen Golf</strong>
                <Badge value="AVAILABLE" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-card float-card-top" aria-hidden="true">
        <span className="float-icon float-icon-green">
          <ClipboardCheck size={16} />
        </span>
        <div>
          <strong>Return inspected</strong>
          <small>Kia Sportage · deposit released</small>
        </div>
      </div>
      <div className="float-card float-card-bottom" aria-hidden="true">
        <span className="float-icon">
          <BadgeCheck size={16} />
        </span>
        <div>
          <strong>Invoice paid</strong>
          <small>$420.00 · Toyota Corolla</small>
        </div>
      </div>
      <small className="sample-caption">Illustrative workspace with sample data</small>
    </div>
  );
}

export default function Home() {
  return (
    <div className="landing">
      <div className="landing-hero">
        <header>
          <Brand />
          <nav>
            <Link href="#features">Features</Link>
            <Link href="#how-it-works">How it works</Link>
            <Link href="/sign-in">Sign in</Link>
            <Link className="btn btn-primary" href="/sign-up">
              Get started
              <ArrowUpRight size={16} />
            </Link>
          </nav>
        </header>
        <main>
          <div className="landing-copy">
            <div className="eyebrow">
              <Sparkles size={14} />
              Car rental management, simplified
            </div>
            <h1>
              Your rental business.
              <br />
              <em>One organized workspace.</em>
            </h1>
            <p>
              Manage your fleet, reservations, customers, and finances with the clarity your
              business needs. Built for independent rental operators.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-glow" href="/sign-up">
                Create your workspace
                <ArrowRight size={17} />
              </Link>
              <Link className="btn btn-ghost" href="/demo">
                Explore the demo
              </Link>
            </div>
            <div className="hero-checks">
              <span>
                <Check size={15} />
                One owner, one branch
              </span>
              <span>
                <Check size={15} />
                Your own private workspace
              </span>
            </div>
          </div>
        </main>
        <div className="hero-photo">
          <Image
            src={heroPhoto}
            alt="White SUV parked on a coastal overlook at sunset"
            fill
            preload
            placeholder="blur"
            sizes="100vw"
          />
          <div className="hero-status" aria-hidden="true">
            <span className="float-icon float-icon-green">
              <CalendarDays size={16} />
            </span>
            <div>
              <strong>Ready for pickup</strong>
              <small>Premium SUV · Today, 6:30 PM</small>
            </div>
            <Badge value="READY" />
          </div>
        </div>
      </div>

      <section className="landing-modules" aria-label="Included modules">
        <span>Everything in one place</span>
        <ul>
          {modules.map((module) => (
            <li key={module}>{module}</li>
          ))}
        </ul>
      </section>

      <section className="landing-showcase" aria-labelledby="showcase-title">
        <div className="showcase-copy">
          <span className="section-kicker">Your dashboard</span>
          <h2 id="showcase-title">See your whole operation at a glance</h2>
          <p>
            Availability, active rentals, and money owed, all on one screen the moment you sign in.
          </p>
          <ul>
            <li>
              <Check size={16} />
              Live fleet status for every vehicle
            </li>
            <li>
              <Check size={16} />
              Returns, inspections, and deposits in one flow
            </li>
            <li>
              <Check size={16} />
              Outstanding balances you can act on
            </li>
          </ul>
        </div>
        <ProductPreview />
      </section>

      <section className="landing-section" id="features" aria-labelledby="features-title">
        <div className="section-intro">
          <span className="section-kicker">Features</span>
          <h2 id="features-title">Everything your rental counter needs</h2>
          <p>
            From the first booking to the final invoice, every step lives in one tidy workspace.
          </p>
        </div>
        <div className="landing-features">
          {features.map(({ icon: Icon, title, description }) => (
            <article key={title}>
              <span className="feature-icon">
                <Icon size={21} strokeWidth={1.7} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section" id="how-it-works" aria-labelledby="steps-title">
        <div className="section-intro">
          <span className="section-kicker">How it works</span>
          <h2 id="steps-title">Up and running in an afternoon</h2>
          <p>No complicated setup. Bring your vehicles and start taking bookings.</p>
        </div>
        <ol className="landing-steps">
          {steps.map(({ title, description }, index) => (
            <li key={title}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="landing-cta" aria-labelledby="cta-title">
        <div>
          <h2 id="cta-title">Ready to run a tighter rental counter?</h2>
          <p>Set up your workspace today and see your whole operation at a glance.</p>
        </div>
        <div className="hero-actions">
          <Link className="btn btn-light" href="/sign-up">
            Start your workspace
            <ArrowRight size={17} />
          </Link>
          <Link className="btn btn-ghost" href="/demo">
            View the demo
          </Link>
        </div>
      </section>

      <footer>
        <Brand />
        <nav aria-label="Footer">
          <Link href="#features">Features</Link>
          <Link href="#how-it-works">How it works</Link>
          <Link href="/sign-in">Sign in</Link>
        </nav>
        <span>Built for everyday rental operations.</span>
      </footer>
    </div>
  );
}
