export interface PlanI {
    id: string;
    title: string;
    description: string;
    fileUrl: string;
    createdOn: string;
}

export interface GoalI {
    id: string;
    title: string;
    description: string;
    freemiumDays: number | null;
    fileUrl: string;
    createdOn: string;
}

export enum TypeFlowE {
    String = "String",
    TextAre = "TextAre",
    Int = "Int",
    Decimal = "Decimal",
    OptionSet = "OptionSet",
    Date = "Date",
    Time = "Time",
    DateTime = "DateTime",
    CheckBox = "CheckBox",
}
export enum SectionFlowE {
    None = "None",
    PersonalInformation = "PersonalInformation",
    PlanInformation = "PlanInformation",
    TimeInformation = "TimeInformation",
    AssistantInformation = "AssistantInformation",
}
export enum ComponentFlowE {
    Gender = "Gender",
    Height = "Height",
    Weight = "Weight",
}
interface DefaultValueFlowI {
    title: string;
    description: string;
    fileUrl: string;
}

export interface FlowI {
    id: string;
    section: SectionFlowE;
    mobileColumn: number;
    desktopColumn: number;
    inputName: string;
    required: boolean;
    priority: number;
    title: string;
    isEditable: boolean;
    showInDashboard: boolean;
    description: string;
    function: string;
    type: TypeFlowE;
    component: ComponentFlowE;
    defaultValues: DefaultValueFlowI[];
}
