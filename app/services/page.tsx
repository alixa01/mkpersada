import {
  artificalData,
  artificalLiftSystems,
  iotData,
  iotSolutions,
  productionData,
  productionLoggingTools,
} from "@/data/services";
import ServicesCard from "@/components/services/ServicesCard";
import PageHero from "@/components/sections/PageHero";

export default function ServicesPage() {
  return (
    <main id="services" className="relative overflow-hidden">
      <section id="hero" className="w-full relative">
        <PageHero
          title="Our Services"
          subtext="Explore our wide range of services tailored to your needs."
        />
      </section>
      <section id="artifical-list-systems">
        <ServicesCard
          name={artificalData.name}
          description={artificalData.description}
          items={artificalLiftSystems}
        />
      </section>
      <section id="production-logging-tools">
        <ServicesCard
          name={productionData.name}
          description={productionData.description}
          items={productionLoggingTools}
        />
      </section>
      <section id="iot-solutions">
        <ServicesCard
          name={iotData.name}
          description={iotData.description}
          items={iotSolutions}
        />
      </section>
    </main>
  );
}
