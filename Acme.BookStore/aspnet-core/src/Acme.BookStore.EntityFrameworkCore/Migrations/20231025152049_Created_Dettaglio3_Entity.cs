using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Acme.BookStore.Migrations
{
    /// <inheritdoc />
    public partial class CreatedDettaglio3Entity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppProdotti_AppOrdini_OrdiniId",
                table: "AppProdotti");

            migrationBuilder.DropIndex(
                name: "IX_AppProdotti_OrdiniId",
                table: "AppProdotti");

            migrationBuilder.DropColumn(
                name: "OrdiniId",
                table: "AppProdotti");

            migrationBuilder.AddColumn<Guid>(
                name: "OrdiniId",
                table: "AppDettagli",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_AppDettagli_OrdiniId",
                table: "AppDettagli",
                column: "OrdiniId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppDettagli_AppOrdini_OrdiniId",
                table: "AppDettagli",
                column: "OrdiniId",
                principalTable: "AppOrdini",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppDettagli_AppOrdini_OrdiniId",
                table: "AppDettagli");

            migrationBuilder.DropIndex(
                name: "IX_AppDettagli_OrdiniId",
                table: "AppDettagli");

            migrationBuilder.DropColumn(
                name: "OrdiniId",
                table: "AppDettagli");

            migrationBuilder.AddColumn<Guid>(
                name: "OrdiniId",
                table: "AppProdotti",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_AppProdotti_OrdiniId",
                table: "AppProdotti",
                column: "OrdiniId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppProdotti_AppOrdini_OrdiniId",
                table: "AppProdotti",
                column: "OrdiniId",
                principalTable: "AppOrdini",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
