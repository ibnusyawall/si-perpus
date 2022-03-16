<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Install extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Installer';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->line('Optimizing..');
        $this->callSilent('optimize');

        $this->line('========= Setup Database =========');
        $this->callSilent('migrate:fresh', [
            '--seed' => true,
        ]);

        $this->line('========= Setup Laravel Passport =========');
        $this->callSilent('passport:install', [
            '--force' => true,
        ]);
        $this->callSilent('passport:client', [
            '--personal' => true,
            '--name' => 'perpus',
        ]);

        $this->line('Finishing..');
        $this->callSilent('optimize');

        $this->info('Finished!');
    }
}
