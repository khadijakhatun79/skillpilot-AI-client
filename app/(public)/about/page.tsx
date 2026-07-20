import { Brain, Target, Rocket, Users, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About SkillPilot AI
          </h1>

          <p className="text-lg max-w-3xl mx-auto text-indigo-100">
            SkillPilot AI is an AI-powered career guidance platform that helps
            learners discover personalized learning paths, explore career
            opportunities, and build job-ready skills with confidence.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Empowering Every Learner
            </h2>

            <p className="text-slate-600 leading-8 mb-5">
              SkillPilot AI combines Artificial Intelligence with modern
              education to help students and professionals choose the right
              career path based on their interests, goals, and skills.
            </p>

            <p className="text-slate-600 leading-8">
              Our platform provides AI-generated learning roadmaps, curated
              courses, career recommendations, and practical guidance to help
              users achieve success faster.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-3xl p-10">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Brain className="text-indigo-600" size={32} />
                <div>
                  <h3 className="font-semibold text-lg">
                    AI Career Guidance
                  </h3>
                  <p className="text-slate-600">
                    Personalized recommendations powered by AI.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Rocket className="text-indigo-600" size={32} />
                <div>
                  <h3 className="font-semibold text-lg">
                    Learning Roadmaps
                  </h3>
                  <p className="text-slate-600">
                    Step-by-step learning plans for every career.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="text-indigo-600" size={32} />
                <div>
                  <h3 className="font-semibold text-lg">
                    Community Driven
                  </h3>
                  <p className="text-slate-600">
                    Learn with expert guidance and community support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our Mission
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow">
              <Target
                className="mx-auto text-indigo-600 mb-5"
                size={42}
              />
              <h3 className="font-bold text-xl mb-3">
                Personalized Learning
              </h3>
              <p className="text-slate-600">
                Deliver AI-powered learning experiences tailored to every
                learner.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <Brain
                className="mx-auto text-indigo-600 mb-5"
                size={42}
              />
              <h3 className="font-bold text-xl mb-3">
                Smart Career Planning
              </h3>
              <p className="text-slate-600">
                Help users identify the best career paths using AI insights.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <Rocket
                className="mx-auto text-indigo-600 mb-5"
                size={42}
              />
              <h3 className="font-bold text-xl mb-3">
                Career Success
              </h3>
              <p className="text-slate-600">
                Equip learners with skills that meet modern industry demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose SkillPilot AI?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "AI-powered career recommendations",
              "Personalized learning roadmaps",
              "High-quality curated courses",
              "Skill assessment & progress tracking",
              "Modern, responsive user experience",
              "Secure authentication & user dashboard",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-slate-50 rounded-xl p-5"
              >
                <CheckCircle className="text-green-500" size={22} />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}