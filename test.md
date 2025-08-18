```mermaid
classDiagram
    direction LR

    class User {
      <<Model>>
      +_id
      +firebaseId
      +email
      +role
    }
    note right of User: "see IUser - src/models/user.model.ts"

    class Student {
      <<Discriminator / Model>>
      +fullName
      +phoneNumber
      +dob
      +courseType
      +year
    }
    note right of Student: "see IStudent - src/models/student.model.ts"

    class Organisation {
      <<Model>>
      +_id
      +name
      +type
      +website
      +isVerified
      +createdBy
    }
    note right of Organisation: "see IOrganisation - src/models/organisation.model.ts"

    class Company {
      <<Discriminator / Model>>
      +industry
      +numberOfEmployees
    }
    note right of Company: "see ICompany - src/models/company.model.ts"

    class College {
      <<Discriminator / Model>>
      +affiliatedTo
    }
    note right of College: "see ICollege - src/models/college.model.ts"

    class Job {
      <<Model>>
      +_id
      +title
      +description
      +status
      +companyId
      +approvedBy
    }
    note right of Job: "see IJob - src/models/job.model.ts"

    class Application {
      <<Model>>
      +_id
      +jobId
      +studentId
      +companyId
      +status
      +currentRound
    }
    note right of Application: "see IApplication - src/models/application.model.ts"

```
