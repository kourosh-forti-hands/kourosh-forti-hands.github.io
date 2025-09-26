export const siteConfig = {
  name: "Kourosh Mobl",
  title: "AI Engineer",
  description: "Portfolio website of Kourosh Mobl",
  accentColor: "#1d4ed8",
  colors: {
    primary: "#1d4ed8",
    secondary: "#6366f1",
    tertiary: "#8b5cf6",
    accent: "#06b6d4",
    neural: "#10b981",
    ai: "#f59e0b",
    cyber: "#ef4444",
    gradient: {
      aiPrimary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      aiSecondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tech: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      neural: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      cyber: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      glass: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"
    }
  },
  social: {
    email: "Moblkourosh@gmail.com",
    linkedin: "https://www.linkedin.com/in/kourosh-mobl/",
    twitter: "",
    github: "https://github.com/kourosh-forti-hands",
  },
  aboutMe:
    "AI Engineer specializing in agentic AI systems and intelligent automation for enterprise environments. Building cutting-edge solutions using AWS Bedrock, AgentCore, and modern LLM architectures to transform compliance, security, and cloud operations. Combining deep cloud infrastructure expertise with advanced AI engineering to deliver transformative solutions that automate complex workflows and enhance decision-making for large-scale organizations.",
  skills: ["Agentic AI", "AWS Bedrock", "AgentCore", "LLM/GenAI", "RAG Systems", "Python", "FastAPI", "Streamlit", "React", "TypeScript", "Vector Databases", "NLP", "Prompt Engineering", "AWS", "Terraform", "Docker", "Kubernetes", "WebSockets", "FedRAMP Compliance", "Information Security", "Cloud Architecture"],
  projects: [
    {
      name: "Enterprise AI Compliance Automation Platform",
      description:
        "Architected an AI-powered system that automates compliance evidence collection for FedRAMP and SOC2 audits, reducing manual effort by 70% through intelligent NLP processing and automated data gathering",
      link: "",
      skills: ["AWS Bedrock", "AgentCore", "Python", "FastAPI", "React", "TypeScript"],
    },
    {
      name: "Intelligent Cloud News Analysis System",
      description:
        "Built an agentic AI system that monitors and analyzes cloud service updates, providing strategic insights and maintaining conversation context using RAG architecture and vector databases",
      link: "",
      skills: ["LLMs", "RAG Systems", "Streamlit", "Python", "NLP"],
    },
    {
      name: "Automated Threat Intelligence Platform",
      description:
        "Developed an AI-driven security intelligence system that processes threat feeds in real-time, correlates patterns, and generates actionable security alerts for enterprise SOCs",
      link: "",
      skills: ["AI/ML", "Security Analysis", "Python", "Real-time Processing"],
    },
    {
      name: "Large-Scale Network Infrastructure Migration",
      description:
        "Led architecture and execution of enterprise network transformation involving 100+ site migrations, complex routing redesign, and high-availability implementations",
      link: "",
      skills: ["Network Architecture", "Cloud Infrastructure", "HA Design", "Terraform"],
    },
    {
      name: "Cloud Compliance Automation Framework",
      description:
        "Created reusable infrastructure-as-code modules for FedRAMP-compliant environments, including automated log aggregation, security monitoring, and compliance reporting",
      link: "",
      skills: ["Terraform", "AWS", "Compliance", "Security Automation"],
    },
  ],
  experience: [
    {
      company: "Coalfire Systems",
      title: "AI Engineer",
      dateRange: "July 2025 - Present",
      bullets: [
        "Lead development of AI-powered compliance automation systems using AWS Bedrock and AgentCore frameworks",
        "Architected Auditron, an enterprise-grade NLP-driven evidence collection system automating FedRAMP/SOC2 compliance",
        "Built intelligent agentic systems for automated threat intelligence gathering and AWS service monitoring",
        "Implemented RAG systems and vector databases for contextual AI decision-making in security operations",
        "Developed reusable AI agent patterns and frameworks accelerating project delivery by 40%",
        "Pioneer AI integration strategies for traditionally manual compliance and audit processes",
      ],
    },
    {
      company: "Coalfire Systems",
      title: "Senior Consultant, Cloud Services",
      dateRange: "Sept 2021 - July 2025",
      bullets: [
        "Led and contributed to projects consisting of design, build and maintenance of secure, audit-ready AWS environments, contributing to $5M+ in revenue",
        "Partnered with clients to understand their commercial environments and develop successful FedRAMP and DoD compliant implementations",
        "Deployed large-scale SIEM and data management tools including Elastic Stack and Splunk Enterprise with complex log ingestion",
        "Developed public facing code base of terraform modules and documentation for FedRAMP-focused open source release",
        "Developed multiple Terraform modules with flexibility as core value, reducing LOE for future engineers",
        "SME of cloud networking adhering to best practices for configuration and architecture",
      ],
    },
    {
      company: "City and County of Broomfield",
      title: "Senior Network Engineer, Internal DevOps",
      dateRange: "Aug 2020 - Sept 2021",
      bullets: [
        "Provided technical recommendations to public safety departments maintaining high level of data security",
        "Implemented and migrated multiple VPN tunnels to FortiGate VPN concentrator for essential Public Safety connectivity",
        "Planned, designed and built implementations and solutions for physical and virtual based networking including cloud",
        "Troubleshoot and resolve network issues providing enhanced remediation and mitigation solutions",
      ],
    },
    {
      company: "Flexential",
      title: "Senior Engineer, Technical Lead for Network Architecture",
      dateRange: "Jan 2018 - Aug 2020",
      bullets: [
        "Senior Technical Lead of Network Architecture services for enterprise network infrastructure",
        "Supervisory Team Lead to internship program, serving as lead engineer and mentor",
        "Subject matter expert translating business requirements into conceptual and physical network architecture designs",
        "Extensive experience with BGP, SDWAN, EIGRP, MPLS, HSRP, STP, Cisco Meraki stack, and Cisco Nexus",
        "Design and Architect hyperscale cloud connectivity to data center workloads primarily in Azure and AWS",
        "Conducted security assessments based on frameworks such as ISO, NIST, PCI, HIPAA",
      ],
    },
    {
      company: "Charter Spectrum",
      title: "Network Engineer Intern",
      dateRange: "May 2017 - July 2017",
      bullets: [
        "Worked with Network Automation Team on network infrastructure projects",
      ],
    },
    {
      company: "Monsanto",
      title: "Information Security Intern",
      dateRange: "May 2016 - August 2016",
      bullets: [
        "Supported Information Security Office (ISO) on security initiatives and assessments",
      ],
    },
  ],
  education: [
    {
      school: "University of Missouri",
      degree: "Bachelor of Science in Information Technology, Minor in Computer Science",
      dateRange: "Dec 2017",
      achievements: [
        "B.S. in Information Technology",
        "Minor in Computer Science",
      ],
    },
    {
      school: "Saint Louis Community College",
      degree: "Associate of Applied Science in Network Engineering",
      dateRange: "May 2015",
      achievements: [
        "A.A.S. in Network Engineering with emphasis in infrastructure operations",
      ],
    },
  ],
  certifications: [
    "Udacity Agentic AI Nanodegree",
    "AWS Certified AI Practitioner",
    "Google Professional Cloud Security Engineer",
    "Google Professional Cloud Network Engineer",
    "AWS Certified Cloud Practitioner",
    "AWS Certified Advanced Networking - Specialty",
    "AWS Certified SysOps Administrator",
    "Azure Network Engineer Associate",
    "HashiCorp Terraform Associate",
    "Cisco Certified Network Associate (CCNA)",
    "Fortinet NSE 4 Network Security Professional",
  ],
};
