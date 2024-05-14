export interface FileI {
    id: string;
    createdOn: string;
    modifiedOn: string;
    createdBy: string;
    modifiedBy: string;
    isDeleted: boolean;
    url: string;
    filename: string;
    extention: string;
    contentType: string;
}

export interface ContributeI {
    id: string;
    user: {
        id: string;
        createdOn: string;
        modifiedOn: string;
        createdBy: string;
        modifiedBy: string;
        isDeleted: boolean;
        firstname: string;
        lastname: string;
        fullname: string;
        mobileNumber: string;
        email: string;
        gender: string;
        birthDate: string;
        username: string;
        password: string;
        appVersion: string;
        device: string;
        pushEndpoint: string;
        pushP256DH: string;
        pushAuth: string;
        file: FileI;
        fileId: string;
        application: {
            id: string;
            createdOn: string;
            modifiedOn: string;
            createdBy: string;
            modifiedBy: string;
            isDeleted: boolean;
            title: string;
            ip: string;
            isDefault: boolean;
            services: {
                id: string;
                createdOn: string;
                modifiedOn: string;
                createdBy: string;
                modifiedBy: string;
                isDeleted: boolean;
                title: string;
                plans: string[];
            }[];
        };
        applicationId: string;
    };
    goal: {
        id: string;
        createdOn: string;
        modifiedOn: string;
        createdBy: string;
        modifiedBy: string;
        isDeleted: boolean;
        title: string;
        description: string;
        freemiumDays: number;
        file: FileI;
        fileId: string;
        plan: {
            id: string;
            createdOn: string;
            modifiedOn: string;
            createdBy: string;
            modifiedBy: string;
            isDeleted: boolean;
            title: string;
            description: string;
            file: {
                id: string;
                createdOn: string;
                modifiedOn: string;
                createdBy: string;
                modifiedBy: string;
                isDeleted: boolean;
                url: string;
                filename: string;
                extention: string;
                contentType: string;
            };
            fileId: string;
            service: {
                id: string;
                createdOn: string;
                modifiedOn: string;
                createdBy: string;
                modifiedBy: string;
                isDeleted: boolean;
                title: string;
                plans: [string];
            };
            serviceId: string;
        };
        planId: string;
        prompt: string;
        goalTrackingItems: {
            id: string;
            createdOn: string;
            modifiedOn: string;
            createdBy: string;
            modifiedBy: string;
            isDeleted: boolean;
            goal: string;
            goalId: string;
            title: string;
            file: {
                id: string;
                createdOn: string;
                modifiedOn: string;
                createdBy: string;
                modifiedBy: string;
                isDeleted: boolean;
                url: string;
                filename: string;
                extention: string;
                contentType: string;
            };
            fileId: string;
            template: string;
        }[];
    };
    groupId: string;
    threadId: string;
    steps: StepI[];
    isActive: boolean;
    createdOn: string;
}
export interface StepI {
    stepId: string;
    inputName: string;
    title: string;
    value: string;
    isEditable: boolean;
    showInDashboard: boolean;
    isActive: boolean;
}
