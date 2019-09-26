'use strict';

const fs = require('fs');
const https = require('https');

let commands;
const mappingUrl = 'https://raw.githubusercontent.com/awslabs/aws-sam-cli/master/samcli/commands/local/lib/generated_sample_events/event-mapping.json';

function buildCommandInfo(commands) {

    const stream = fs.createWriteStream("aws-sam-generate-event-command-reference.md");

    stream.write(`# AWS SAM Cli generate event reference`)

    stream.write(`\n\nAvailable services:\n`)

    Object.keys(commands).forEach((serviceName) => {
        stream.write(`\n- [${serviceName}](#${serviceName.toLowerCase().replace(' ', '-')})\n`)
    })

    for (const [command, subcommands] of Object.entries(commands)) {

        stream.write(`\n\n# ${command}\n`);

        for (const [subcommand, subcommandsArguments] of Object.entries(subcommands)) {

            stream.write(`\n\`\`\`bash\nsam local generate-event ${command} ${subcommand}\n\`\`\``)
            stream.write(`\n${subcommandsArguments.help}`)

            if (Object.keys(subcommandsArguments.tags).length > 0) {
                stream.write('\n\n#### Arguments:\n')
                for (const [tagCommands, tagCommandsInfo] of Object.entries(subcommandsArguments.tags)) {

                    stream.write(`\n\`--${tagCommands}\` [${delimitedArray(tagCommandsInfo, ': ').join(', ')}]\n`)

                }
                stream.write('\n')
            }

            stream.write('\n***\n')

        }

    }

    stream.end();
}

function delimitedArray(obj, delimiter) {
    return Object.keys(obj).map((key) => {
        const val = obj[key];
        return `${key}${delimiter}${val}`;
    });
}

https.get(mappingUrl, function (res) {
    let body = '';

    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function () {
        commands = JSON.parse(body);
        buildCommandInfo(commands)
    });
}).on('error', function (e) {
    console.log("Got an error: ", e);
});
