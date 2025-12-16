export const siteConfig = {
  name: "Kourosh Mobl",
  title: "Senior AI Engineer",
  description: "Portfolio website of Kourosh Mobl - Senior AI Engineer",
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
    email: "moblkourosh@gmail.com",
    linkedin: "https://www.linkedin.com/in/kourosh-mobl/",
    twitter: "",
    github: "https://github.com/kourosh-forti-hands",
  },
  aboutMe:
    "Senior AI Engineer and Cloud Architect with extensive expertise in multi-cloud environments (AWS, Azure, GCP) and agentic AI systems. Building intelligent automation solutions that transform compliance, security, and cloud operations for enterprise environments. From pioneering open-source FedRAMP infrastructure and architecting EKS solutions for DoD environments, to developing multi-agent cyber threat intelligence systems—I bridge deep infrastructure expertise with cutting-edge AI engineering to deliver scalable, audit-ready solutions.",
  skills: [
    "Agentic AI",
    "AWS Bedrock",
    "AgentCore",
    "LLM/GenAI",
    "RAG Systems",
    "Prompt Engineering",
    "Python",
    "Bash",
    "Terraform",
    "AWS",
    "Azure",
    "GCP",
    "Kubernetes",
    "Docker",
    "Helm",
    "AWS EKS",
    "AWS ECS",
    "FedRAMP",
    "STIG",
    "SIEM",
    "HashiCorp Vault",
    "HashiCorp Packer",
    "CI/CD Tools",
    "Monitoring and Logging",
    "Configuration Management",
    "Azure Entra ID",
    "Firewalls",
    "Networking",
    "Linux",
    "Containerization"
  ],
  projects: [
    {
      name: "Multi-Agent Cyber Threat Intelligence Solution",
      description:
        "Developed a multi-agent Cyber Threat Intelligence solution to proactively provide data sources for SIEM ingestion, generating efficiencies within the SecOps practice by up to 50% less time spent on false alerts.",
      link: "",
      skills: ["Agentic AI", "Python", "SIEM", "Security Automation"],
    },
    {
      name: "Open Source FedRAMP Infrastructure",
      description:
        "Championed and executed the strategy to open-source FedRAMP-focused infrastructure code, significantly reducing barriers to compliance adoption across the industry. Awarded 'Orange Crush Crusader' for top contribution.",
      link: "",
      skills: ["Terraform", "AWS", "FedRAMP", "Open Source"],
    },
    {
      name: "FedRAMP High & DoD EKS Architecture",
      description:
        "Architected comprehensive EKS solutions for FedRAMP High and DoD environments, developing specialized Terraform modules that provision underlying infrastructure (RDS, EC2, Elasticache) to support Helm chart deployments.",
      link: "",
      skills: ["AWS EKS", "Terraform", "Kubernetes", "Helm", "FedRAMP"],
    },
    {
      name: "Enterprise Compliance Automation Platform",
      description:
        "Built reusable AI agent patterns and frameworks for secure Agentic AI solution development, accelerating project delivery by 40% and establishing best practices for governance.",
      link: "",
      skills: ["Agentic AI", "Python", "Compliance", "Automation"],
    },
    {
      name: "Public Safety Network Infrastructure",
      description:
        "Implemented and migrated multiple VPN tunnels to FortiGate VPN concentrator for essential Public Safety connectivity, maintaining high data security through multi-agency connectivity solutions.",
      link: "",
      skills: ["Networking", "Firewalls", "VPN", "Security"],
    },
  ],
  experience: [
    {
      company: "Coalfire Systems Inc",
      title: "Senior AI Engineer",
      dateRange: "June 2025 - Present",
      bullets: [
        "Founding member of the AI Trust and Security Engineering practice, pioneering AI integration strategies for traditionally manual compliance and audit processes",
        "Developed a multi-agent Cyber Threat Intelligence solution to proactively provide data sources for SIEM ingestion, generating efficiencies within SecOps by up to 50% less time spent on false alerts",
        "Established best practices and governance for secure Agentic AI solution development, creating reusable AI agent patterns and frameworks that accelerated project delivery by 40%",
      ],
    },
    {
      company: "Coalfire Systems Inc",
      title: "Senior Cloud Engineer",
      dateRange: "Sept 2021 - June 2025",
      bullets: [
        "Pioneered development of cutting-edge Terraform modules and infrastructure automation, balancing security compliance requirements with engineering innovation to create scalable, audit-ready cloud environments",
        "Championed and executed the strategy to open-source FedRAMP-focused infrastructure code, significantly reducing barriers to compliance adoption across the industry",
        "Led customer-facing workshops to assess existing architectures, partnering with clients to implement FedRAMP-compliant solutions incorporating CIS and DISA STIG hardened images and FIPS encryption",
        "Architected comprehensive EKS solutions for FedRAMP High and DoD environments, developing specialized Terraform modules for RDS, EC2, and Elasticache infrastructure",
        "Served as technical SME across networking, SIEM, IaC, and AWS services, providing daily mentorship that accelerates junior and mid-level engineers' career growth",
      ],
    },
    {
      company: "City and County of Broomfield",
      title: "Senior Network Engineer",
      dateRange: "Aug 2020 - Sept 2021",
      bullets: [
        "Provided technical recommendations to public safety departments maintaining high level of data security through multi-agency connectivity solutions",
        "Implemented and migrated multiple VPN tunnels to FortiGate VPN concentrator for essential Public Safety connectivity",
        "Planned, designed, and built implementations for physical and virtual based networking including cloud networking",
      ],
    },
    {
      company: "Flexential",
      title: "Senior Engineer, Technical Lead",
      dateRange: "Jan 2018 - Aug 2020",
      bullets: [
        "Senior Technical Lead of Network Architecture services, designing and re-architecting enterprise network infrastructure for various customers",
        "Supervisory Team Lead to internship program, serving as lead engineer and mentor",
        "Design and deploy enterprise LANs, WANs, and Wireless networks including routers, switches, firewalls, access points, and load balancers",
        "Supported DevOps environments across AWS, Azure, and GCP, including connectivity between on-prem and cloud environments",
      ],
    },
  ],
  education: [
    {
      school: "University of Missouri",
      degree: "Bachelor of Science in Information Technology",
      dateRange: "Aug 2015 - Dec 2017",
      achievements: [
        "Minor in Computer Science",
      ],
    },
    {
      school: "Saint Louis Community College",
      degree: "Associate of Applied Science in Network Engineering",
      dateRange: "Jan 2013 - May 2015",
      achievements: [
        "Network Engineering emphasis",
      ],
    },
  ],
  certifications: [
    "AWS Certified AI Practitioner",
    "AWS Certified Advanced Networking - Specialty",
    "AWS Certified SysOps Administrator - Associate",
    "Google Professional Cloud Security Engineer",
    "Google Professional Cloud Network Engineer",
    "Azure Network Engineer Associate",
    "HashiCorp Terraform Associate",
    "Cisco CCNA Security",
    "Cisco CCNA Routing and Switching",
    "Fortinet NSE4",
  ],
  courses: [
    {
      name: "Agentic AI",
      provider: "Udacity",
      date: "Aug 2025",
    },
    {
      name: "Building Agents",
      provider: "Udacity",
      date: "Aug 2025",
    },
    {
      name: "Prompting for Effective LLM Reasoning and Planning",
      provider: "Udacity",
      date: "Aug 2025",
    },
    {
      name: "Introducing Generative AI with AWS",
      provider: "Udacity",
      date: "June 2025",
    },
  ],
  awards: [
    {
      name: "Orange Crush Crusader",
      company: "Coalfire Systems Inc",
      description: "Awarded for being the top contributor to the development of Coalfire's Open Source Accelerated FedRAMP Architectures and supporting git repositories.",
    },
    {
      name: "Team Member of the Quarter",
      company: "Coalfire Systems Inc",
      description: "",
    },
  ],
};
