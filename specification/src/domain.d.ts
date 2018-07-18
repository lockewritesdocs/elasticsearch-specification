import { RestSpecMapping } from "./specification/rest-spec-mapping";
declare module Domain {
    class Type {
        name: string;
        constructor(name: string);
        nullable: boolean;
    }
    class ArrayOf {
        type: Type;
        of: InstanceOf;
    }
    class Dictionary {
        type: Type;
        key: InstanceOf;
        value: InstanceOf;
        array: boolean;
    }
    type InstanceOf = Type | ArrayOf | Dictionary;
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
        queryStringParameters: QueryStringParameter[];
        constructor(data: any);
    }
    class RestSpecTypeConverter {
        static toQueryStringType(name: string, specType: string): string;
        static toRouteParamType(name: string, specType: string): string;
    }
    class QueryStringParameter {
        name: string;
        type: string;
        description: string;
        required: boolean;
        default: boolean;
        constructor(name: string, data: any);
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
