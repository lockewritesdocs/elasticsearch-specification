import { RestSpecMapping } from "./specification/rest-spec-mapping";
declare module Domain {
    class Type {
        name: string;
        constructor(name: string);
        nullable: boolean;
    }
    class Array {
        type: Type;
        of: InstanceOf;
    }
    class Dictionary {
        type: Type;
        key: InstanceOf;
        value: InstanceOf;
        array: boolean;
    }
    type InstanceOf = Type | Array | Dictionary;
    class TypeDeclaration {
        name: string;
        constructor(name: string);
    }
    class Interface extends TypeDeclaration {
        properties: InterfaceProperty[];
        inheritsFromUnresolved: string[];
        inherits: Domain.Interface[];
    }
    class InterfaceProperty {
        name: string;
        constructor(name: string);
        type: InstanceOf;
    }
    class Enum extends TypeDeclaration {
        name: string;
        flags: boolean;
        constructor(name: string, flags?: boolean);
        members: EnumMember[];
    }
    class EnumMember {
        name: string;
        constructor(name: string);
    }
    class BodyDocumentation {
        description: string;
        required: boolean;
        constructor(data: any);
    }
    class Endpoint {
        name: string;
        documentation: string;
        bodyDocumentation: BodyDocumentation;
        methods: string[];
        url: Route;
        typeMapping: RestSpecMapping;
        constructor(file: string, restSpecMapping: {
            [p: string]: RestSpecMapping;
        });
    }
    class Route {
        path: string;
        paths: string[];
        parts: RoutePart[];
        constructor(data: any);
    }
    class RoutePart {
        name: string;
        type: string;
        description: string;
        required: boolean;
        constructor(name: string, data: any);
    }
}
export = Domain;
