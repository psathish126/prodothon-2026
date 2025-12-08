import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const peaMembers = [
    { sno: 1, position: "Secretary", name: "BALAJI C" },
    { sno: 2, position: "Treasurer", name: "DEVISRI J" },
    { sno: 3, position: "Joint Secretaries", name: "SUKANTH N R" },
    { sno: 4, position: "Joint Secretaries", name: "NHARGUNA NANGAI M B" },
    { sno: 5, position: "Graduate Executive", name: "NALVETHA B" },
    { sno: 6, position: "Graduate Executive", name: "ARUNRAJA C" },
    { sno: 7, position: "Senior Lead Executives", name: "S SHANMUGAM" },
    { sno: 8, position: "Senior Lead Executives", name: "RAMAKRISHNAN K" },
    { sno: 9, position: "Senior Lead Executives", name: "HARISH N" },
    { sno: 10, position: "Junior Executives", name: "KANCIA ROSLIN MARY" },
    { sno: 11, position: "Junior Executives", name: "AISHA NIHAR Z" },
    { sno: 12, position: "Junior Executives", name: "NEKA S" },
    { sno: 13, position: "Junior Executives", name: "DHANALAKSHMI K" },
    { sno: 14, position: "Junior Executives", name: "MAKESHWARAN T" },
    { sno: 15, position: "Junior Executives", name: "KARUNYA V" },
  ];

  const smeMembers = [
    { sno: 1, position: "Secretary", name: "LAKSHMAN RAGHAV V G" },
    { sno: 2, position: "Treasurer", name: "DIYA VISALI R S" },
    { sno: 3, position: "Joint Secretaries", name: "RITHIKA G" },
    { sno: 4, position: "Joint Secretaries", name: "NIMESHA S" },
    { sno: 5, position: "Graduate Executive", name: "NARMADA B S" },
    { sno: 6, position: "Graduate Executive", name: "K KARTHIKRAJA" },
    { sno: 7, position: "Senior Lead Executives", name: "MANJUSWETHA S V" },
    { sno: 8, position: "Senior Lead Executives", name: "KRISITHA J S" },
    { sno: 9, position: "Senior Lead Executives", name: "MUGILAN N" },
    { sno: 10, position: "Junior Executives", name: "ARI PRASANNA V" },
    { sno: 11, position: "Junior Executives", name: "S ABIRAMI" },
    { sno: 12, position: "Junior Executives", name: "DINESH KARTHICK N C" },
    { sno: 13, position: "Junior Executives", name: "SUNANTHIKA S" },
    { sno: 14, position: "Junior Executives", name: "NUTHANASRI V R" },
    { sno: 15, position: "Junior Executives", name: "M LOGESHWARAN" },
  ];

  const TeamTable = ({ title, subtitle, members }: { title: string; subtitle: string; members: typeof peaMembers }) => (
    <Card className="shadow-card border-0">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="font-heading text-2xl text-center">
          {title}
        </CardTitle>
        <p className="text-primary-foreground/80 text-center text-sm">{subtitle}</p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary">
                <th className="px-4 py-3 text-left text-sm font-semibold text-primary">S. No</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Position</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Name</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr
                  key={member.sno}
                  className={`border-b border-secondary last:border-0 ${
                    index % 2 === 0 ? "bg-background" : "bg-secondary/30"
                  } hover:bg-accent/5 transition-smooth`}
                >
                  <td className="px-4 py-3 text-sm text-muted-foreground">{member.sno}</td>
                  <td className="px-4 py-3 text-sm text-foreground font-medium">{member.position}</td>
                  <td className="px-4 py-3 text-sm text-foreground">{member.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-32">
      {/* Header */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Our Team
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Office Bearers for Academic Year 2025–26
          </p>
        </div>
      </section>

      {/* Team Tables */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <TeamTable
            title="Production Engineering Association (PEA)"
            subtitle="Office Bearers for Academic Year 2025–26"
            members={peaMembers}
          />

          <TeamTable
            title="Society of Manufacturing Engineers (SME)"
            subtitle="Students' Chapter"
            members={smeMembers}
          />
        </div>
      </section>
    </div>
  );
};

export default Team;
