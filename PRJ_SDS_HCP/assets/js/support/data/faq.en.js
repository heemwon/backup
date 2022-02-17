if (!faqResources) {
  var faqResources;
  faqResources = {};
}
faqResources.en = {
	"OFFERINGS": [{
			"category": "OFFERINGS",
			"section": "Virtual Server",
			"title": "What is Virtual Server?",
			"contents": "Virtual Server enables free assignment of computing resources when necessary without having to build dedicated infrastructure resources using servers, such as CPU/memory."
		},
		{
			"category": "OFFERINGS",
			"section": "Virtual Server",
			"title": "How is the Virtual Server service charged?",
			"contents": "VM is charged by the size of CPU/memory, contract option (without contract/1 year/3 years), and OS type (open source, RHEL, or Windows), according to how many hours you use the applicable VM."
		},
		{
			"category": "OFFERINGS",
			"section": "VM Auto-Scaling",
			"title": "What is VM Auto-Scaling?",
			"contents": "VM Auto-Scaling automatically adds or deletes VM as per conditions pre-determined by the user."
		},
		{
			"category": "OFFERINGS",
			"section": "VM Auto-Scaling",
			"title": "What are the criteria for scaling resources?",
			"contents": "VM Auto-Scaling is mainly executed for the following two reasons: 1) resource usage and 2) schedule. Users may designate the threshold or average value for CPU/memory to define resource creation/deletion. For schedule, users may pre-register preferred schedule to set automatic creation/deletion of resources at a certain time."
		},
		{
      "category": "OFFERINGS",
      "section": "Bare Metal Server",
      "title": "What is Bare Metal Server?",
      "contents": "Bare Metal Server offers computing service with dedicated assignment of physically separated computing resources without virtualization."
    },
    {
      "category": "OFFERINGS",
      "section": "Bare Metal Server",
      "title": "What are the limitations of Bare Metal Server compared to Virtual Server?",
      "contents": "Bare Metal Server offers dedicated resources and some features may be unavailable. We are making continuous effort for improvement.\n  - Security Group setting, custom image creation, and init script input functions are unsupported.\n  - Up to 20 Bare Metal Servers may be created within one project."
    },
		{
			"category": "OFFERINGS",
			"section": "Block Storage",
			"title": "What is Multi-Attach feature?",
			"contents": "Multi-Attach feature enables access to a volume from multiple servers when configuring cluster environments for HA (High Availability). The service is currently reserved for BM only."
		},
		{
			"category": "OFFERINGS",
			"section": "Block Storage",
			"title": "What is the maximum amount of assignment for creating a Block Storage volume?",
			"contents": "100GB is provided to the OS storage of a server and up to 160TB may be assigned online using an external Block Storage."
		},
		{
			"category": "OFFERINGS",
			"section": "Block Storage",
			"title": "How is the rate charged?",
			"contents": "The rate is charged on a daily basis according to the requested usage of the user."
		},
		{
			"category": "OFFERINGS",
			"section": "File Storage",
			"title": "What is NAS image snapshot service?",
			"contents": "The service offers snapshot creation and storage/cycle management in the NAS volume. Rapid recovery per volume using the created snapshots is also available."
		},
		{
			"category": "OFFERINGS",
			"section": "File Storage",
			"title": "What are strengths of SDS File Storage?",
			"contents": "Samsung SDS guarantees 10-20 times higher performance (in terms of IOPS and thoughput) compared to other file storage services provided by AWS, OCI and other global CSPs."
		},
		{
			"category": "OFFERINGS",
			"section": "File Storage",
			"title": "What is the maximum amount of assignment for creating a File Storage volume?",
			"contents": "A maximum of 100TB may be assigned when creating a File Storage volume."
		},
		{
			"category": "OFFERINGS",
			"section": "File Storage",
			"title": "How is the rate charged?",
			"contents": "The rate is charged on a daily basis according to the requested usage of the user."
		},
		{
			"category": "OFFERINGS",
			"section": "Object Storage",
			"title": "How is the public access authority provided?",
			"contents": "Public access to the URL is unavailable due to security improvement issues. It will be provided in the new version to be released in October."
		},
		{
			"category": "OFFERINGS",
			"section": "Object Storage",
			"title": "Is version management provided for buckets?",
			"contents": "Yes, version management is provided to store multiple object mutations within the same buckets as well as retain, search, and recover objects of all versions stored in the bucket."
		},
		{
			"category": "OFFERINGS",
			"section": "Object Storage",
			"title": "Is encryption provided?",
			"contents": "Yes, bucket encryption is provided using the SSE-S3 (server-side encryption-S3), encrypting in units of bucket for secure data storage."
		},
		{
			"category": "OFFERINGS",
			"section": "Object Storage",
			"title": "How is the service charged?",
			"contents": "The service is charged on a daily rate according to the usage within the bucket."
		},
		{
			"category": "OFFERINGS",
			"section": "Backup",
			"title": "How is the backed up?",
			"contents": "Backup is created based on the schedule."
		},
		{
			"category": "OFFERINGS",
			"section": "Backup",
			"title": "What are provided as Backup?",
			"contents": "VM and NAS snapshot images as well as DB backup (online) are provided."
		},
		{
			"category": "OFFERINGS",
			"section": "Backup",
			"title": "What happens to the data after the expiration of a storage period?",
			"contents": "The backup storage period can be set to either 2 or 4 weeks, and expired data will be deleted automatically."
		},
		{
			"category": "OFFERINGS",
			"section": "Backup",
			"title": "How is recovery using VM image snapshots provided?",
			"contents": "VM snapshot image backup creates new VM to recover the requested data (OS and data)."
		},
		{
			"category": "OFFERINGS",
			"section": "Backup",
			"title": "How is the rate charged?",
			"contents": "Snapshot images of the user-created VM and DB backup are stored in Object Storage, which will be charged by the amount of backup in the equipment."
		},
		{
			"category": "OFFERINGS",
			"section": "DB Service",
			"title": "What is DB Service?",
			"contents": "DB Service offers relational or unstructured DBMS as well as data analysis using a web-based console, automating configuration and environments for database creation/setting. It runs on a VM environment to ensure reliable management of critical data and allows VPC-based single instance or redundancy configuration. The service also provides automated features of tasks within the DB lifecycle from backup/recovery to parameter management, audit, minor patch, and monitoring."
		},
		{
			"category": "OFFERINGS",
			"section": "DB Service",
			"title": "What are the types of DBMS offered by DB Service?",
			"contents": "□ Provided DB\n - RDB: EPAS, PostgreSQL, MariaDB, MySQL, MS SQL, Tibero, and Vertica\n - NoSQL DB: Redis"
		},
		{
			"category": "OFFERINGS",
			"section": "DB Service",
			"title": "What are automated management functions under DB Service?",
			"contents": "- Auto provisioning: Automatically install standard version SDS database using VM with various spec\n- HA architecture (RDB): Active-standby configuration based on SW-level synchronous replication\n- Cluster architecture (NoSQL): Replica architecture in DB to guarantee availability\n- Recovery: Able to recover to a specific point in time based on the backup file stored in Object Storage\n- Patch: Offer Patch function for DB Minor version\n- User parameter setting: Set parameters regarding better DB performance and security\n- Audit setting: Save logs on DB connection and DDL execution\n- Monitoring: Monitor VM resources (CPU and Memory) and DB status"
		},
		{
			"category": "OFFERINGS",
			"section": "Kafka",
			"title": "What is Confluent Platform (Kafka)?",
			"contents": "Kafka service automates cluster configuration of the Confluent Platform using Kubernetes Apps. The web-based dashboard supports convenient management, including created Kafka status/event monitoring, resource usage monitoring for each broker, and the authentication management function."
		},
		{
			"category": "OFFERINGS",
			"section": "Kafka",
			"title": "Which features are provided?",
			"contents": "• Kafka creation\n - Auto provisioning: Automatically install a container-based Confluent Platform with standard spec\n• Kafka management\n - Running status management: Manage lifecycles of Kafka service including creating/deleting clusters using a web-based console\n - User configuration setting: Set/edit user configuration regarding Kafka performance and security\n - Audit setting: Save logs on Kafka access and execution\n - Monitoring: Kafka status monitoring (using monitoring function on Confluent Platform)"
		},
		{
			"category": "OFFERINGS",
			"section": "Kafka",
			"title": "How do I initiate Kafka service?",
			"contents": "You need to use SCP Kubernetes Engine. If not, you can apply for a work node (general VM) by signing up for SCP Kubernetes Engine. Worker nodes (general and GPU VM) provisioned on the Engine will be utilized as Kafka resources."
		},
		{
      "category": "OFFERINGS",
      "section": "Elasticsearch",
      "title": "What is Analytics Elasticsearch?",
      "contents": "Analytics Elasticsearch provides automated configuration and environments for Elasticsearch creation and setup for data analysis using a web-based console in the Samsung Cloud Platform environment."
    },
    {
      "category": "OFFERINGS",
      "section": "Elasticsearch",
      "title": "Which versions of Elasticsearch are supported?",
      "contents": "Currently, open source community versions of 7.6, 7.3, and 5.3 are provided."
    },
    {
      "category": "OFFERINGS",
      "section": "Elasticsearch",
      "title": "How is high availability (HA) supported?",
      "contents": "The service guarantees high availability using its own synchronous replication cluster configuration based on virtual machines with high reliability."
    },
		{
			"category": "OFFERINGS",
			"section": "API Gateway",
			"title": "What is API Gateway?",
			"contents": "API Gateway is a service for convenient management and monitoring of API. Rest APIs are currently used for the service with the following functions:\n  - Convenient API management\n   . API registration, editing details (resources and methods), and version/deployment management\n   . Resource registration vis Swagger Import\n - Reliable and secure service\n   . User access control using API keys and IP whitelisting\n   . Excessive inbound traffic prevention by setting the usage plans (by minute/hour/day/week/ year)\n - Easy monitoring\n   . Performance indexes on API requests, response time and the number of errors"
		},
		{
			"category": "OFFERINGS",
			"section": "API Gateway",
			"title": "How is API Gateway charged?",
			"contents": "Monthly billing is applied based on the number of API requests. Please refer to the pricing table on the website for more details.\n※ Pricing table: [Pricing > Pricing Option > Pricing for Each Offering] on the service portal"
		},
		{
			"category": "OFFERINGS",
			"section": "API Gateway",
			"title": "Can I check if the registered API is connected to the Endpoint?",
			"contents": "Yes.\nLog in on the Samsung SDS Cloud console, go to the API offering page, create the service and click Connection Test on [API Management > API Registration] on the left to see if it is connected."
		},
		{
			"category": "OFFERINGS",
			"section": "API Gateway",
			"title": "What are the features for API authentication security?",
			"contents": "API keys and IP whitelisting ensure secure API requests.\n\nAPI keys are automatically issued when a product is created. Automatic API issuance and the expiration date for the key can be set when creating a product. \nFor created products, click [Products > Product Name] on the left side to set the expiration for API keys or recreate keys.\n\nIP Whitelisting designates the list of IPs that allow API access and can be added, edited, or deleted on the [Products > Product Name > Whitelist] tab on the left."
		},
		{
			"category": "OFFERINGS",
			"section": "Mail/SMS/Push",
			"title": "What are Mail/SMS/Push services, respectively?",
			"contents": "- Email: Regular/scheduled sending, viewing, and template management\n- SMS: SMS/MMS sending, scheduled sending, viewing, and template management\n- Push: Various push notifications and their results"
		},
		{
			"category": "OFFERINGS",
			"section": "Mail/SMS/Push",
			"title": "How do I use Email/SMS/Push notification service in the form of API?",
			"contents": "Log in on the Samsung SDS Cloud console, go to [All Offerings > Application Service > Email/SMS/Push] to apply for the service.\nThen, for each offering registered, go to [Offering List > Email/SMS/Push] and use [User Guide] to customize APIs within the guidelines."
		},
		{
			"category": "OFFERINGS",
			"section": "Mail/SMS/Push",
			"title": "What is the difference between public and private API?",
			"contents": "- Public API: API available for general users\n- Private API: Internally used API (only available via open requests; general users cannot make direct requests)"
		},
		{
			"category": "OFFERINGS",
			"section": "Mail/SMS/Push",
			"title": "What is the difference between SMS and Push services?",
			"contents": "SMS service sends messages to the recipients with a phone number, whereas Push service is available for devices without a number."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "What is SCP Kubernetes Engine (SKE)?",
			"contents": "SCP Kubernetes Engine (SKE) offers management service for easy execution of Kubernetes on SCP without having to install or operate Kubernetes control planes or worker nodes.\n\nManaged Kubernetes is provided to enable deployment, management, and scaling of container applications in SCP environments. Without separate configuration procedures for Kubernetes control planes or worker nodes, users can enjoy Kubernetes clusters."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "What is Kubernetes?",
			"contents": "Kubernetes is an open source software for deployment and management of large-capacity containerized applications. Please refer to the official documents of the CNCF for more details.\n※ For more information: https://kubernetes.io/"
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "What consists of SCP Kubernetes Engine (SKE)?",
			"contents": "SCP Kubernetes Engine (SKE) provisions (initiates) the two major components of Kubernetes: control planes and worker nodes. Worker nodes run containers for actual application execution while control planes offer orchestration (running management and scheduling) and status monitoring."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "Why do I need to use SCP Kubernetes Engine (SKE)?",
			"contents": "If you wish to configure container environments without SCP Kubernetes Engine (SKE), you will need to perform Kubernetes cluster configuration by yourself, including Kubernetes installation and VM creation for Control Plane and worker nodes.\n\nThe SKE allows simple provisioning of worker nodes on the SCP console while providing the Control Plane with a guaranteed availability. As operational burden for running Kubernetes significantly reduces, you can use more effort on application building instead of container environment configuration. \n\nSCP detect and replaces abnormal Control Plane nodes and offer patches to ensure high availability. Application scalability and security can be further increased by integrating with various SCP offerings."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "Which Kubernetes version does SCP Kubernetes Engine (SKE) support?",
			"contents": "The current Kubernetes version may be checked on [Manual - Kubernetes Engine] on the upper right corner on the console.\nSCP Kubernetes Engines (SKE) will continue to update open source Kubernetes versions."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "Can Kubernetes clusters be updated to new versions?",
			"contents": "※ (To be released in Oct 2021)\n\nSCP Kubernetes Engine (SKE) provides managed in-place upgrades of clusters for all platform versions of SKE and Kubernetes.\nCluster work is streamlined with the latest Kubernetes features, SKE configuration updates and security patches.\nNew Kubernetes versions will have been released and validated to be compatible with SKE and therefore updates to more reliable Kubernetes versions will be supported."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "How is SCP Kubernetes Engine (SKE) charged?",
			"contents": "Please refer to the pricing table on the website for pricing details of assigned control planes and cluster management. Hourly billing will be applied from the initiation to termination of the cluster. Worker nodes are charged by the hour as per the type of created VM.\n※ Pricing table: [Pricing > Pricing Option > Pricing for Each Offering] on the service portal"
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Apps",
			"title": "What are Kubernetes Apps?",
			"contents": "Kubernetes Apps service deploys a range of container images including Web/WAS and other app infrastructure in clusters created by Kubernetes Engine.\nAbundant field operation experiences help provide container images with optimized settings, enabling easy app deployment."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Apps",
			"title": "Which features are provided?",
			"contents": "Easy-to-use functions are offered from searching for the list of container SW to creating/viewing/deleting apps using a web-based console. All-in-one container environments are supported with secure container images with standard specs to enable safe app creation and deployment."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Apps",
			"title": "Which SW is provided?",
			"contents": "□ SW Offerings\n(*The software may be subject to change without notice by the provider.)\n - App Infrastructure (Web/WAS): Jboss EAP, JEUS, Tomcat, Wildfly, Apache, Nginx, etc.\n - App Infrastructure (Messaging):  NATS, RabbitMQ, Zookeeper, etc.\n - Monitoring: Grafana\n - Base and Language Base: Alpine, CentOS, Ubuntu, .NET Core, Node.js, Python, etc."
		},
		{
			"category": "OFFERINGS",
			"section": "VPC",
			"title": "What is the maximum number of VPC per project?",
			"contents": "Up to 5 VPCs can be created per project."
		},
		{
			"category": "OFFERINGS",
			"section": "VPC",
			"title": "Can I use the unauthorized IP used in the existing private network (customer network) in the cloud environment?",
			"contents": "You can use unauthorized IPs previously used in the customer network in the cloud environment, but migration circumstances (e.g. consecutive transfers) sometimes do not support the existing unauthorized IPs.\nThe existing private network (customer network) also has to be connected using Direct Connect or VPN service."
		},
		{
			"category": "OFFERINGS",
			"section": "VPC",
			"title": "What is the purpose of reserved IPs?",
			"contents": "Public IPs that are included in the VM creation may change when the VM is rebooted or transferred. If you provide open web service on the Internet using a certain VM and need a fixed public IP, you could reserve an IP in advance using the reserved IP service."
		},
		{
			"category": "OFFERINGS",
			"section": "VPC",
			"title": "How are reserved IPs charged?",
			"contents": "Reserved IPs are metered by the time from requesting the reservation to the cancellation by the hour regardless of actual usage."
		},
		{
			"category": "OFFERINGS",
			"section": "Security Group",
			"title": "What is the difference between the firewalls of Security Group and the ones of VPC?",
			"contents": "Security Group of Networking offers firewalls for VM. The rules set out using the Security Group service can be applied to Virtual Server, Auto-Scaling, DB, and Load Balancer.\nThe rules set on the firewall tab within the VPC offering work on VPC Gateway."
		},
		{
			"category": "OFFERINGS",
			"section": "Security Group",
			"title": "Can Security Groups be renamed?",
			"contents": "No, you will have to delete the Security Group and create a new one."
		},
		{
			"category": "OFFERINGS",
			"section": "Load Balancer",
			"title": "What are the services that can be created by Load Balancer?",
			"contents": "Load Balancer provides L4 TCP, L7 HTTP, and L7 HTTPS.\nHTTP and HTTPS allow designations of different server groups for services according to URL patterns.\nIf you select HTTP or HTTPS, a URL processing input is enabled and an SSL certificate for HTTPS input has to be designated."
		},
		{
			"category": "OFFERINGS",
			"section": "Load Balancer",
			"title": "What is the maximum number of Load Balancer?",
			"contents": "The number of VPCs varies by the size of LB instances as follows:\n - Up to 3 small instances\n - 2 additional small instances are available for each medium instance created.\n20 and 100 services may be created for small and medium instances, respectively. For instances with more than 100 services, please contact the Service Desk to create a large LB instance."
		},
		{
			"category": "OFFERINGS",
			"section": "DNS",
			"title": "Is it possible to register an existing domain?",
			"contents": "Only new domains can be registered, not the existing domains owned by customers.\n※ New domains registration renews every year and usage (automatic extension) will be charged additionally by registered domain."
		},
		{
			"category": "OFFERINGS",
			"section": "DNS",
			"title": "Are the queries charged?",
			"contents": "The queries will be provided for free in 2021 then switch to a paid service later. (To be informed before the transition)"
		},
		{
			"category": "OFFERINGS",
			"section": "GSLB",
			"title": "When do I use GSLB?",
			"contents": "GSLB (Global Server Load Balancing) service automatically distributes network traffic  based on DNS in the case of a traffic spike in a certain region. If there is an issue in a data center, the traffic is connected to a DC in another region to increase system availability."
		},
		{
			"category": "OFFERINGS",
			"section": "GSLB",
			"title": "Are the queries charged?",
			"contents": "The queries will be provided for free in 2021 then switch to a paid service later. (To be informed before the transition)"
		},
		{
			"category": "OFFERINGS",
			"section": "VPN",
			"title": "Which VPN equipment is compatible?",
			"contents": "Cisco, Palo Alto, Check Point, and Juniper can be linked using IPsec standard.\nNo major issues are expected if the linking is in compliance with the VPN standard but we still suggest a stabilization period after the connection."
		},
		{
			"category": "OFFERINGS",
			"section": "VPN",
			"title": "Can the bandwidth be further extended?",
			"contents": "The current bandwidth of 10Mbps is expected to extend to 30Mbps. The schedule will be informed upon launch."
		},
		{
			"category": "OFFERINGS",
			"section": "VPN",
			"title": "Is VPN equipment rental service available?",
			"contents": "VPN equipment is not usually for rental but it may be available via prior consultation on the product spec, rental period, and rates if rental is the only possible option for you. Please contact the Service Desk (1661-3311) for more details."
		},
		{
			"category": "OFFERINGS",
			"section": "DDoS Protection",
			"title": "Is DDos Protection service automatically applied when registering for WAF?",
			"contents": "DDos Protection is available only for the customers who use WAF service (of Basic class). Still, additional application for the DDos Protection service is required after WAF registration."
		},
		{
			"category": "OFFERINGS",
			"section": "DDoS Protection",
			"title": "Is DDos Protection offered for free?",
			"contents": "It is provided for free upon application to the customers of WAF product."
		},
		{
			"category": "OFFERINGS",
			"section": "DDoS Protection",
			"title": "Can application layers be detected/blocked?",
			"contents": "No, only L3 and L4 detection/blocking are available. "
		},
		{
			"category": "OFFERINGS",
			"section": "DDoS Protection",
			"title": "Are warnings issued when a DDos attack is detected?",
			"contents": "No, threshold-based blocking is provided to ensure service availability without issuance of warnings."
		},
		{
			"category": "OFFERINGS",
			"section": "DDoS Protection",
			"title": "Which information is provided on the dashboard?",
			"contents": "The 3 most common attack types and target IPs are displayed on the dashboard among other information."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "Is packet monitoring offered for all servers?",
			"contents": "No. The offering conducts packet monitoring only on web and WAS servers."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "What are recommended environments for IDS?",
			"contents": "Environments with 4 cores and 8GB memory or higher are recommended to avoid any potential performance issues."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "Who can install or delete IDS agents?",
			"contents": "IDS agents can be installed or deleted by customers. A manual will be provided via email by the control center when you sign up for the service."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "How is IDS service charged?",
			"contents": "IDS service is charged per VM with detection policy. Please refer to the pricing table on the website for pricing details for each VM.\n※ Pricing table: [Pricing > Pricing Option > Pricing for Each Offering] on the service portal"
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "What is the subscription period for the service?",
			"contents": "Monthly subscription is applied after the initiation of the service. If you cancel the service within the first month, a monthly rate will still be charged."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "How is IDS service charged if related servers are in suspension?",
			"contents": "IDS service is charged regardless of server suspension. If you wish to cancel the service, please request for a cancellation of the contract."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "How is the rate charged?",
			"contents": "A monthly rate is charged for usage of 1 month (first to last day of each month). Quotation and billing will be made through sales representatives. For mid-month application/cancellation, the rate is calculated pro rata for the first and last months.\nE.g. IDS service initiation on Aug 15 (1-year contract)\n      August: Aug 15-31 (17 days) * Pro rata rate; \n      From September to July of following year: Monthly rate;\n      In August of following year: Aug 1-14 (14 days) * Pro rata rate"
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "Which information is provided on the dashboard?",
			"contents": "The 3 most common attack types and target IPs are displayed on the dashboard among other information."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "What are the criteria for warning in case of an event detection?",
			"contents": "Warnings are issued within 1 hour for emergency events and within 4 hours for general/confirmed ones.\n※ Emergency: A successful attack has been confirmed.\n   Confirmed: The success of an attack is unclear or a website vulnerability has been confirmed.\n   General: An attack has been attempted but failed."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "Are all attacks notified?",
			"contents": "Warnings are issued in accordance with the rules controlled by SIEM."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "Who will receive warning emails?",
			"contents": "Warning emails are sent to persons in charge of the project. For this purpose, please add a person in charge of warning management (e.g. a security/infrastructure manager) to the list of project managers when requesting for IDS service."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "Are unknown attacks also be detected?",
			"contents": "Unknown attacks that cannot be detected by security equipment are excluded from warning targets. Detection will be available if the attack pattern or other rules are added."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "How do I edit the recipients of warnings?",
			"contents": "Request the project manager to edit the person in charge of warning management (a security/infrastructure manager)."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "How are events detected?",
			"contents": "Rule-oriented detection set by SDS Control Center is provided with warning notifications based on automatic and manual analysis."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "Can IPs that attempt an attack be blocked on the detection mode?",
			"contents": "On the detection mode, any events occurred will be collected and analyzed to send warnings if necessary. For the attacker IP that prompts a warning will be pre-blocked. If the attacker IP is an address used for maintenance or checkup, please be sure to process it as an exception."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "What is the duration for IP blocks?",
			"contents": "Pre-blocked IPs with a warning issuance are maintained for 3 months. The block may be terminated early upon customer request."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "Do I need to change the DNS?",
			"contents": "In order to redirect the traffic of a domain to be protected, DNS dedicated to web firewalls need to be changed."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "How is the WAF service charged?",
			"contents": "The service rates are determined as per the pricing table of each zone according to the traffic scale of the URL, which is based on the highest traffic of the month."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "What is the subscription period for the service?",
			"contents": "Yearly subscription is applied after the initiation of the service. If you cancel the service within the first year, a yearly rate will still be charged."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "How is the WAF service billed?",
			"contents": "A monthly rate is charged for usage of 1 month (first to last day of each month). Quotation and billing will be made through sales representatives. For mid-month application/cancellation, the rate is calculated pro rata for the first and last months. The pricing table from the highest traffic of the month will be applied."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "How is WAF service charged if related servers are in suspension?",
			"contents": "WAF service is charged regardless of server suspension. If you wish to cancel the service, please request for a cancellation of the contract."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "Which information is provided on the dashboard?",
			"contents": "The 3 most common attack types and target IPs are displayed on the dashboard among other information."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "What are the criteria for warning in case of an event detection?",
			"contents": "Warnings are issued within 1 hour for emergency events and within 4 hours for general/confirmed ones.\n※ Emergency: A successful attack has been confirmed.\n   Confirmed: The success of an attack is unclear, or a website vulnerability has been confirmed.\n   General: An attack has been attempted but failed."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "Are all attacks notified?",
			"contents": "Warnings are issued in accordance with the rules controlled by SIEM."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "Who will receive warning emails?",
			"contents": "Warning emails are sent to persons in charge of the project. For this purpose, please add a person in charge of warning management (e.g. a security/infrastructure manager) to the list of project managers when requesting for IDS service."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "Are unknown attacks also be detected?",
			"contents": "Unknown attacks that cannot be detected by security equipment are excluded from warning targets. Detection will be available if the attack pattern or other rules are added."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "How do I edit the recipients of warnings?",
			"contents": "Request the project manager to edit the person in charge of warning management (a security/infrastructure manager)."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "How are events detected?",
			"contents": "Rule-oriented detection set by SDS Control Center is provided with warning notifications based on automatic and manual analysis."
		},
		{
			"category": "OFFERINGS",
			"section": "Web Vulnerability Assessment",
			"title": "How do perform a reassessment after a web vulnerability assessment?",
			"contents": "Inspections on the execution are provided to the identified vulnerabilities after a web vulnerability assessment. A manual inspection will be performed upon request, followed by the result report. The inspection is provided up to twice within 30 days after the checkup completion."
		},
		{
			"category": "OFFERINGS",
			"section": "Web Vulnerability Assessment",
			"title": "Can I cancel an assessment during one?",
			"contents": "You may cancel a reserved assessment before it has initiated. Assessment in progress may also be cancelled if the progress rate is less than 50%. The progress rate is estimated based on the total number of web pages for inspection."
		},
		{
			"category": "OFFERINGS",
			"section": "Web Vulnerability Assessment",
			"title": "Can I set the assessment schedule?",
			"contents": "Diagnosis is available 3 workdays after the application of an assessment. \n(E.g. If applied on May 1, assessment may be set from May 4.)"
		},
		{
			"category": "OFFERINGS",
			"section": "Web Vulnerability Assessment",
			"title": "How do I receive notifications for results when the assessment is completed?",
			"contents": "You will receive an email notification of the completion of the assessment to the pre-entered email address."
		},
		{
			"category": "OFFERINGS",
			"section": "Web Vulnerability Assessment",
			"title": "What are the criteria for the assessment?",
			"contents": "Assessment is made on 16 diagnosis items.\n1) Lacking Input Validation: File upload/download vulnerability, SQL Injection, and Cross-Site Scripting\n2) Vulnerable Certificates & Access Control: Admin page exposure\n3) Improper Environment Setting: Unnecessary method support, directory listing, default page, web server/WAS default password, and Frontpage/WebDAV solution ban (limited to IIS)\n4) Improper Error Handling: System data exposure and error page undetermined\n5) Exposure of Critical Data: Exposure via unnecessary files and critical data transfer encryption unapplied\n6) Other: Unnecessary page and OpenSSL version vulnerability"
		},
		{
			"category": "OFFERINGS",
			"section": "Web Vulnerability Assessment",
			"title": "How long are the assessment results stored?",
			"contents": "The assessment result is stored for 1 month after the completion."
		},
		{
			"category": "OFFERINGS",
			"section": "Web Vulnerability Assessment",
			"title": "Are the assessments available for any web browser environments?",
			"contents": "You may set the User-Agent for all web browser environments, including Internet Explorer and Chrome."
		},
		{
			"category": "OFFERINGS",
			"section": "Web Vulnerability Assessment",
			"title": "What do I receive after the Web Vulnerability Assessment?",
			"contents": "You will receive a report on the details of identified vulnerabilities with response measures."
		},
		{
			"category": "OFFERINGS",
			"section": "Web Vulnerability Assessment",
			"title": "How is Web Vulnerability Assessment charged?",
			"contents": "Please refer to the pricing table on the website for pricing details for web vulnerability assessment on each URL.\n※ Pricing table: [Pricing > Pricing Option > Pricing for Each Offering] on the service portal"
		},
		{
			"category": "OFFERINGS",
			"section": "Web Vulnerability Assessment",
			"title": "How is Web Vulnerability Assessment billed?",
			"contents": "The billing is automatically made on Samsung SDS Cloud console. If a diagnosis fails due to a Basic Cloud system issue and normal access to the website is not available, the assessment will not be charged and result report will not be provided."
		},
		{
			"category": "OFFERINGS",
			"section": "Certificate management",
			"title": "What is Certificate Management?",
			"contents": "Certificate Management protects websites and applications provided by SDS Cloud with registered SSL/TLS certificates. Integrated management features are also available, including viewing certificates and setting expiration notifications."
		},
		{
			"category": "OFFERINGS",
			"section": "Certificate management",
			"title": "How do I know if a certificate will be expired soon?",
			"contents": "When creating a certificate information, you may enter the expiration date of the certificate and the email addresses of the recipients for notifications 1 week prior to the expiration."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "What is SCP Kubeflow?",
			"contents": "SCP Kubeflow is an open source machine learning platform for MLOps* in the SCP Kubernetes environments. Images including add-on features provided by open source Kubeflow and SCP are provisioned for customers' Kubernetes clusters.\n\n*MLOps: An ML engineering discipline that aims to unify machine learning development (Dev) and machine learning system operation (Ops)"
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "What is Kubeflow?",
			"contents": "Kubeflow provides development environments for a range of machine learning frameworks (e.g. Scikit-learn Tensorflow, PyTorch, etc.) in order to ensure development, testing, and production-grade ML services. Convenient features for model learning, tuning, and deployment stages are offered. The platform is for data scientists and ML engineers to automate each stage into pipelines. Please refer to the website below for more details.\n※ For more information: https://www.kubeflow.org/"
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "What consists of SCP Kubeflow?",
			"contents": "SCP Kubeflow is installed and provisioned (initiated) on SCP Kubernetes Engine. Worker nodes (general and GPU VM) provisioned on the Engine are used as resources for management and data analysis of Kubeflow."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "Why do I need to use SCP Kubeflow?",
			"contents": "If you wish to configure ML environments without SCP Kubeflow, you will need to perform Kubernetes cluster configuration by yourself, from VM creation for Kubernetes Control Plane and worker nodes to Kubeflow configuration, including Kubernetes installation, registry configuration, and Kubeflow image installation.\n\nSP Kubeflow enables simple provisioning of Kubeflow on your worker nodes on the SCP console. You can enjoy software with various add-on features on the version of Kubeflow validated by SCP.\n\nSCP also develops and adds a range of machine learning functions that can be used on the enterprise level."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "Which features are provided by SCP Kubeflow?",
			"contents": "Major features of SCP Kubeflow include the following:\n  - Default features (.Mini)\n    : Jupyter Notebook, Kubeflow SDK and tools for model development, learning, and deployment, and workflow automation (Kubeflow pipelines)\n - Add-on features (.Enterprise)\n    : Kubernetes GPU job scheduling, ML framework images (Tensorflow, PyTorch, Keras, etc.), Kubeflow monitoring/logging, linking to authentication, and Kubeflow-oriented user portal (to be released in 2022)"
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "Which Kubeflow version does SCP Kubeflow support?",
			"contents": "The current Kubeflow version may be checked on [Manual - Kubeflow] on the upper right corner on the console.\nSCP Kubeflow will continue to update open source Kubeflow versions."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "Which Kubernetes versions allow installation of SCP Kubeflow?",
			"contents": "The Kubernetes version available for SCP Kubeflow installation may be checked on [Manual - Kubeflow] on the upper right corner on the console.\nSCP Kubeflow is compatible with Kubernetes v1.21 environments (as of July 2021)."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "Can Kubernetes clusters be updated to new versions?",
			"contents": "No, SCP Kubeflow is a new version that does not support migration."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "How is SCP Kubeflow charged?",
			"contents": "The service is charged by the hour from the initiation to termination of Kubeflow. Basic rates for the software and licensing fees as per installed cluster vCore are also charged.\nThe cost for Kubernetes Engine and cloud computing needed for the installation will also be charged, respectively."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "Is there an SLA for SCP Kubeflow?",
			"contents": "No, SCP Kubeflow is a service for software provision and installation without a separate SLA."
		},
		{
			"category": "OFFERINGS",
			"section": "Logging & Audit",
			"title": "What is Logging & Audit?",
			"contents": "Logging & Audit stores console and open API activities of users to track changes, resolve issues, and test security of cloud resources. Without additional setting, the activities of the past 90 days are logged and various search functions offer log analysis and efficient log management."
		},
		{
			"category": "OFFERINGS",
			"section": "Logging & Audit",
			"title": "When do I use trails?",
			"contents": "Trails can be created to allow users to directly save logs in Object Storage. When creating a trail, you can select the user account and offering for collecting/saving logs. There is no expiration date to the logs saved in Object Storage."
		},
		{
			"category": "OFFERINGS",
			"section": "Cloud Monitoring",
			"title": "What is Cloud Monitoring?",
			"contents": "Cloud Monitoring collects resource usage status, changes, and logs of infrastructure resources in operation and notifies the user if the pre-set threshold is exceeded by creating an event. \nMajor features of the service are as follows:\n 1) Reliable computing resource management\n   - Users can easily check indexes on the usage of CPU, disk, and memory. The automatic notifications to designated recipients of an event in the resources being used enable swift failure analysis and responses, supporting reliable operation of computing resources.\n 2) Convenient monitoring\n   - Basic dashboards for each project and user-defined dashboards are available with various widget settings that enable easy and fast dashboard creation. \n 3) Event index management\n   - A web-based console helps set event indexes with just a few clicks. The setting for monitoring targets (event pattern, necessary condition/cycle, performance index, operation status, etc.) may be edited according to the environment and managed with threshold and notification settings.\n 4) Resource log management\n   - Log data of resources are collected/stored and searching for a specific log is also available. \n   - Events for major keywords are indexed to automatically notify designated personnel if the pre-determined conditions are met and offer more reliable environments."
		},
		{
			"category": "OFFERINGS",
			"section": "Cloud Monitoring",
			"title": "Which services does Cloud Monitoring offer?",
			"contents": "Cloud Monitoring offers monitoring service to support reliable operation of resources, using dashboards, event/notifications, and log monitoring.\n1) Dashboard creation/management\n  - Project dashboard (default): Target resources, operation status, top 5 performance, event maps, and event list\n  - User-defined dashboard\n    . Basic widgets: Title, event list, overview (numbers of target, events by category, etc., and top 5 performance (CPU and memory usage, etc.)\n    . User widgets: Time series graphs, comparison charts, instance maps, etc.\n2) Event/notification management\n  - Set event index: Event patterns, scheduling, conditions, target data, etc. \n  - Provide custom defined events: Monitoring targets, risk, performance items, event rules, etc.\n3) Log monitoring\n  - View logs by project: Cumulative number of logs, number and cumulative rate of daily logs, and number of logs for each target\n  - Collect/store/search logs\n  - Export searched log data (CSV files)\n  - Index search keyword events and send notifications\n4) Related offerings\n  - Performance monitoring: Virtual Server, Bare Metal Server, VM Auto-Scaling, File Storage, VPC, 9 types of DB., Load Balancer, and K8s Engine\n  - Log monitoring: Virtual Server, Bare Metal Server, K8s Engine, and 9 types of DBs\n  ※ Related offerings for performance/log monitoring will continue to be added."
		},
		{
			"category": "OFFERINGS",
			"section": "Cloud Monitoring",
			"title": "How is Cloud Monitoring charged?",
			"contents": "Cloud Monitoring is a free service.\nIf it switches to a paid service later, customers will be notified in advance."
		}
	],
	"PRICING": [{
			"category": "PRICING",
			"section": "Pricing",
			"title": "How are the rates calculated?",
			"contents": "Rate calculation varies by offering.\nSome offerings charge the same amount for the contracted period, while others charge by the hour, usage, or number of cases. Discounts may be applied according to the assigned amount (used amount) for some offerings.\nAll rates stated on the pricing option exclude VAT. Please refer to the billing standard of each offering beforehand."
		},
		{
			"category": "PRICING",
			"section": "Pricing",
			"title": "What is the standard time zone applied to service metering?",
			"contents": "Samsung SDS services are currently metered based on Korea Time Zone (UTC+9)."
		},
		{
			"category": "PRICING",
			"section": "Pricing",
			"title": "How is the server usage charged?",
			"contents": "You can choose to use the service under a 1/3-year contract or without one. Your contract option and the applied OS will determine your rates.\nIf you choose the service without a contract, you will be charged by the hour of usage and no additional server fee is charged while servers are off. The resources that maintain the service including storage connected to the server will incur charges normally."
		},
		{
			"category": "PRICING",
			"section": "Pricing",
			"title": "How are the contracted rates applied?",
			"contents": "Contracted options offer monthly rates regardless of the usage of the offering.\nUpon termination of the contract, the service automatically switches to the uncontracted rates as of the time of termination.\nContracted options are available only for certain offerings including Compute."
		},
		{
			"category": "PRICING",
			"section": "Pricing",
			"title": "Is there a cancellation fee?",
			"contents": "If you are using the service without a contract, cancellation is available at any time without a penalty fee.\nIf under a contract, the 50% of the total service fee for the remaining contract period (in months) will be charged as a penalty fee.\nThe penalty will be billed with the pro rata rate for usage as of the cancellation date on the billing date of the following month of the cancellation."
		},
		{
			"category": "PRICING",
			"section": "Pricing",
			"title": "How is the storage usage charged?",
			"contents": "Block Storage and File Storage services charge for the assigned storage (GB) of the month, while Object Storage and Backup charge for the used amount (GB) of the month.\nPlease refer to the pricing standards of each offering for more details."
		},
		{
			"category": "PRICING",
			"title": "When can I check my billing?",
			"contents": "You can check your bill in [Management > Integrated Usage Management] within the Samsung SDS Cloud console. Usage history provides daily rates (estimated amount) and the billing history is available after the previous month's rates have been confirmed at the beginning of each month. Actual billing may differ from the estimated amount shown in usage history."
		},
		{
			"category": "PRICING",
			"section": "Pricing",
			"title": "How can I view estimated rates?",
			"contents": "The pricing calculator on the Samsung SDS Cloud service portal offers estimated rates."
		},
		{
			"category": "PRICING",
			"section": "Pricing",
			"title": "Are there any discounts offered for more storage usage?",
			"contents": "Discounts vary for offerings. For instance, storage offerings (Block, File, Object, and Backup) have a pricing standard according to the monthly assignment (or usage), which means the more the usage, the lower the rate per GB.\nPlease refer to the pricing standards of each offering for more details."
		},
		{
			"category": "PRICING",
			"section": "Pricing",
			"title": "Which payment methods are available? Can I pay with a credit card?",
			"contents": "Credit card payments are not available at the moment. We are planning to add the option in the future."
		}
	],
	"MEMBERSHIP": [{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "I entered my name wrong when signing up for membership. How can I change it?",
			"contents": "You can change your information, including your photo, password and preferred language.\n1. After logging in to the console, put the mouse over the user photo on top menu bar and click [Account Information] to redirect to the account setting page.\n2. Click Edit at the bottom to open a pop-up window for entering password.\n3. Change your first and last names, company, password, access control IP, preferred language, or time zone information."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "How do I change my account email address?",
			"contents": "Your email address is used as your login ID and may not be changed.\nPlease sign up for a new account and register as a member of your current project. If you are an account user, you may contact our sales representative or Service Desk (1661-3311) to change the account information to the newly registered email address (ID)."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "How do I find my account (login ID)?",
			"contents": "1. Click Find My ID/Password at the bottom of the login page.\n2. To find your ID, select the country code, enter your mobile phone and click the Authenticate button.\n3. Enter the authentication code sent to your mobile phone and click Confirm."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "How do I change my password?",
			"contents": "You can change your information, including your photo, password and preferred language.\n1. After logging in to the console, put the mouse over the user photo on top menu bar and click [Account Information] to redirect to the account setting page.\n2. Click Edit at the bottom to open a pop-up window for entering password.\n3. Change your first and last names, company, password, access control IP, preferred language, or time zone information."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "How do I sign up for membership?",
			"contents": "To use the console, you need to sign up first.\n1. Click [Sign Up] on the login page.\n2. Agree to the \"Terms of Agreement\" on the signup page.\n3. Select Yes if you are a Knox user (internal account user of Samsung affiliates).\n4. Enter your email address in the ID (email) field to check availability. If you are a Knox user, validate your email address.\n5. Enter your first and last names, company and division information. The information will be automatically imported from the system for Knox users.\n6. Passwords must be a combination of letters, numbers and symbols (!@#$%&*^) using 8-20 characters.\n7. Select the language you want to use on the console.\n8. Select two-factor authentication. Even if you choose not to use it, you will still need the two-factor authentication via SMS or email to log in.\n9. Set your access control IP. Please be aware that if you select Yes and register an IP address, only the registered IP will be granted access.\n10. Click Confirm to complete the signup process."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "If I leave the website before finishing the membership signup process, is my information stored?",
			"contents": "If the membership signup process is not completed, all information entered during the process is immediately deleted."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "How do I update my company information?",
			"contents": "You can change your information, including your photo, password and preferred language.\n1. After logging in to the console, put the mouse over the user photo on top menu bar and click [Account Information] to redirect to the account setting page.\n2. Click Edit at the bottom to open a pop-up window for entering password.\n3. Change your first and last names, company, password, access control IP, preferred language, or time zone information."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "What is the two-factor authentication?",
			"contents": "The two-factor sign-in authentication is a dual security service that allows a login with an additional verification step (with a verification code or a one-time password) after entering the ID and password. \nAfter entering your ID and password, an OTP (one-time password) will be sent to your email address or mobile phone."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "I did not receive an email after requesting an OTP for the two-factor authentication.",
			"contents": "Please check your spam folder. \nYou can also receive the OTP on your mobile phone if you select mobile verification."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "How do I withdraw my membership?",
			"contents": "Please contact our sales representative or Service Desk (+82-1661-3311) to request a withdrawal of your membership."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "How do I change my membership information, company information or my password?",
			"contents": "You can change your information, including your photo, password and preferred language.\n1. After logging in to the console, put the mouse over the user photo on top menu bar and click [Account Information] to redirect to the account setting page.\n2. Click Edit at the bottom to open a pop-up window for entering password.\n3. Change your first and last names, company, division, password, access control IP, preferred language, or time zone information,"
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "How do I find my password?",
			"contents": "1. Click Find My ID/Password at the bottom of the login page.\n2. To find your password, select the country code, enter your mobile phone and click the Authenticate button.\n3. Enter the authentication code sent to your mobile phone and click Confirm."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "How do I switch to a paid account after a free trial?",
			"contents": "Projects and resources created by a free trial account are deleted after the trial period. Please contact our sales representative or Service Desk (1661-3311) to create a new account under a new contract to have access to the entire service."
		},
		{
			"category": "MEMBERSHIP",
			"section": "Membership",
			"title": "I signed up as a member. Where do I register my payment information to use services?",
			"contents": "Please contact the Service Desk (1661-3311) and we will inform you through our sales representative."
		}
	],
	"TROUBLE" : [],
	"OTHERS": [{
			"category": "OTHERS",
			"section": "Others",
			"title": "How do I use Samsung SDS Cloud service?",
			"contents": "Samsung SDS Cloud service includes the service portal and console.\nOur service portal provides a range of necessary information for Samsung SDS Cloud services from offering details and case studies to pricing options and customer support.\nThe console offers an environment for purchasing Samsung SDS Cloud offerings or set/manage desired offerings."
		},
		{
			"category": "OTHERS",
			"section": "Others",
			"title": "Which browsers does the Samsung SDS Cloud service portal support?",
			"contents": "The Samsung SDS Cloud service portal supports the latest versions of Chrome and Microsoft Edge (IE unsupported)."
		},
		{
			"category": "OTHERS",
			"section": "Others",
			"title": "Where can I check offering usage history?",
			"contents": "Log in to the Samsung SDS Cloud console and click [Management > Integrated Usage Management] on upper right corner to see the information.\nOffering usage and detailed history are all available."
		},
		{
			"category": "OTHERS",
			"section": "Others",
			"title": "How do I report errors of or suggestions for the service?",
			"contents": "If you wish to share service errors/failures or suggestions for improvement while using the Samsung SDS Cloud service portal, please let us know on [Support > Contact]."
		}
	]
}