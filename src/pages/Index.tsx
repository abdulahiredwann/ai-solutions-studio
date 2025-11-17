import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Sparkles, Workflow, Database, Zap, LineChart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Data AI Analysis Ltd. | ניתוח נתונים בבינה מלאכותית בע"מ
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Transform Raw Data into{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Real AI Solutions
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              We empower organizations to unlock the full potential of their data through intelligent
              automation and adaptive AI models that respond in real time.
            </p>
            <p className="mb-10 text-base leading-relaxed text-foreground/80 md:text-lg">
              Our comprehensive AI Factory automates everything from data cleaning to model deployment,
              orchestrated by intelligent AI agents. Build custom AI models, optimize workflows, and
              generate synthetic data—all within a scalable, user-friendly platform.
            </p>

            {/* Key Differentiators */}
            <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-card p-4 shadow-sm transition-all hover:shadow-md">
                <div className="mb-2 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Fully Automated AI Factory</p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm transition-all hover:shadow-md">
                <div className="mb-2 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Intelligent AI Agents</p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm transition-all hover:shadow-md">
                <div className="mb-2 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Real-Time Adaptive Models</p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm transition-all hover:shadow-md">
                <div className="mb-2 flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Scalable & User-Friendly</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="text-base font-medium shadow-lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-base font-medium">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
              About Us
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              <p>
                <strong className="font-semibold text-foreground">Data AI Analysis Ltd.</strong> is a
                pioneering company dedicated to transforming raw data into actionable AI solutions.
              </p>
              <p>
                Our mission is to help organizations unlock the full potential of their data through a
                comprehensive <strong className="font-semibold text-foreground">AI Factory</strong>. We
                automate data cleaning, feature engineering, model training, and deployment—all
                orchestrated by intelligent AI agents and adaptive models that respond in real time.
              </p>
              <p>
                This empowers businesses to build custom AI models, optimize workflows, and generate
                synthetic data for more robust AI training, all within a scalable and user-friendly
                platform. We believe that every organization deserves access to powerful, personalized
                AI—without the complexity.
              </p>
              <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
                <p className="font-medium text-foreground">
                  <strong>Industry:</strong> Data Infrastructure and Analytics
                </p>
                <p className="mt-2 font-medium text-foreground">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:0549901996" className="text-primary hover:underline">
                    054-990-1996
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">What We Do</h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              Our comprehensive suite of AI services transforms your data journey from raw information
              to actionable insights.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">AI Factory Automation</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  End-to-end automation of your AI pipeline. From ingestion to deployment, our AI
                  Factory handles it all—so you can focus on results, not repetitive tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Data Cleaning & Feature Engineering
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Turn messy, inconsistent data into a solid foundation. Our intelligent preprocessing
                  and feature engineering extract maximum value from every data point.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  AI Agents & Adaptive Models
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Intelligent agents that learn and adapt in real time. Our models continuously improve
                  and respond to changing data patterns, ensuring peak performance.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Custom AI Model Creation</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Tailored AI models built specifically for your unique business challenges. No
                  one-size-fits-all—just powerful, personalized solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Synthetic Data Generation
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Generate high-quality synthetic data to augment your training sets. Enhance model
                  robustness while maintaining privacy and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Workflow Optimization</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Streamline operations with AI-powered workflow optimization. Identify bottlenecks,
                  automate decisions, and accelerate your time to value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Let's Connect</h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Ready to transform your data into powerful AI solutions? Let's talk about how intelligent
              automation can move your business forward.
            </p>
            <div className="mb-8 flex flex-col items-center justify-center gap-4">
              <a
                href="tel:0549901996"
                className="inline-flex items-center gap-2 text-2xl font-semibold text-primary hover:underline md:text-3xl"
              >
                📞 054-990-1996
              </a>
            </div>
            <Button size="lg" className="text-base font-medium shadow-lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Data AI Analysis Ltd. (ניתוח נתונים בבינה מלאכותית בע"מ). All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
