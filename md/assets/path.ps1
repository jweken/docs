$path = $env:PATH
$pathEntries = $path -split ';'

$pathEntries | ForEach-Object {
    $_
} | Out-File -FilePath 'EnvironmentPath.jwe' -Encoding UTF8